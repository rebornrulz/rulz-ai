import numpy as np #app.py
import csv
import os
from numpy import argmax
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
from attention_decoder import AttentionDecoder
from keras import backend as K

file = "Iban.tsv"
folder = "Corpus"


# load a clean dataset
def load_clean_sample_data():
    #return load(open(filename, 'rb'))
    filepath = os.path.join(folder,file)
    with open(filepath, "r", encoding="utf8") as read:
        reader = csv.reader(read,delimiter="\t")
        dataset = []
        for row in reader:
            dataset.append(row) 
    read.close()     
    return dataset

# fit a tokenizer
def create_tokenizer(lines):
  tokenizer = Tokenizer(char_level=False)
  tokenizer.fit_on_texts(lines)
  return tokenizer

# max sentence length
def max_length(lines):
  return max(len(line.split()) for line in lines)

# map an integer to a word
def word_for_id(integer, tokenizer):
  for word, index in tokenizer.word_index.items():
    if index == integer:
      return word
  return None

# generate target given source sequence
def predict_sequence(model, tokenizer, source):
    global prediksi
    prediction = model.predict(source, verbose=0)[0]
    integers = [argmax(vector) for vector in prediction]
    prediksi = prediction
    target = list()
    for i in integers:
        word = word_for_id(i, tokenizer)
        if word is None:
            break
        target.append(word)
        
    return ' '.join(target)

# translate
def translate(model, tokenizer, sources):
    for i, source in enumerate(sources):
        # translate encoded source text
        source = source.reshape((1, source.shape[0]))
        translation = predict_sequence(model, all_tokenizer, source)
    return translation

def recall(y_true, y_pred):
    true_positives = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)))
    possible_positives = K.sum(K.round(K.clip(y_true, 0, 1)))
    recall = true_positives / (possible_positives + K.epsilon())
    return recall

def precision(y_true, y_pred):
    true_positives = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)))
    predicted_positives = K.sum(K.round(K.clip(y_pred, 0, 1)))
    precision = true_positives / (predicted_positives + K.epsilon())
    return precision
    
def f1(y_true, y_pred):
    result_precision = precision(y_true, y_pred)
    result_recall = recall(y_true, y_pred)
    return 2*((result_precision*result_recall)/(result_precision+result_recall+K.epsilon()))

def reply(model, input_text):
    if len(input_text) > MAX_INPUT_SEQ_LENGTH:
        input_text = input_text[0:MAX_INPUT_SEQ_LENGTH]
    input_seq = np.zeros((1, self.max_encoder_seq_length, self.num_encoder_tokens))
    for idx, char in enumerate(input_text.lower()):
        if char in self.input_char2idx:
            idx2 = self.input_char2idx[char]
            input_seq[0, idx, idx2] = 1
    states_value = self.encoder_model.predict(input_seq)

    target_seq = np.zeros((1, 1, self.num_decoder_tokens))
    target_seq[0, 0, self.target_char2idx['\t']] = 1
    target_text = ''
    terminated = False
    while not terminated:
        output_tokens, h, c = self.decoder_model.predict([target_seq] + states_value)

        sample_token_idx = np.argmax(output_tokens[0, -1, :])
        sample_character = self.target_idx2char[sample_token_idx]
        target_text += sample_character

        if sample_character == '\n' or len(target_text) >= self.max_decoder_seq_length:
            terminated = True

        target_seq = np.zeros((1, 1, self.num_decoder_tokens))
        target_seq[0, 0, sample_token_idx] = 1
        states_value = [h, c]
    return target_text

# load datasets
dataset = load_clean_sample_data()
dataset = np.reshape(dataset, (-1,2))
dataset1 = dataset.reshape(-1,1)

# prepare tokenizer
all_tokenizer = create_tokenizer(dataset1[:,0])
all_vocab_size = len(all_tokenizer.word_index) + 1
all_length = max_length(dataset1[:, 0])

# load model
model = load_model('/content/Model/MODEL_LSTM_LSTM_ATTNDECODER.h5',
                  custom_objects={'AttentionDecoder': AttentionDecoder, 
                                  'precision':precision, 'recall':recall, 'f1':f1})
bot_conversations = []


from flask_ngrok import run_with_ngrok
from flask import Flask, request, send_from_directory, redirect, render_template, flash, url_for, jsonify,make_response, abort

app = Flask(__name__)
app.config.from_object(__name__)  # load config from this file , flaskr.py
run_with_ngrok(app)
# Load default config and override config from an environment variable
app.config.from_envvar('FLASKR_SETTINGS', silent=True)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return 'About Us'

@app.route('/reply', methods=['POST', 'GET'])
def reply():
    if request.method == 'POST':
        if 'sentence' not in request.form:
            flash('No sentence post')
            redirect(request.url)
        elif request.form['sentence'] == '':
            flash('No sentence')
            redirect(request.url)
        elif request.form['sentence'] == 'bye':
            bot_conversations.append('Bot: ' + 'Chat tu automatic disimpan dalam chats.tsv. Nuan ka muai chat ari disimpan? Taip "au" ')
        elif request.form['sentence'] == 'au':
          if os.path.exists("chats.tsv"):
            os.remove("chats.tsv")
            bot_conversations.append('Bot: ' + 'Fail Chat udah dibuai.') 
            bot_conversations.append('Bot: ' + 'Bye. Ila berandau baru.')     
        else:
            sent = request.form['sentence']
            chat_data = sent + "\t"
            bot_conversations.append('You: ' + sent)
            sent = sent.strip().split('\n')
            X = all_tokenizer.texts_to_sequences(sent)
            X = pad_sequences(X, maxlen=all_length, padding='post')

                
            # find reply and print it out
            a = translate(model, all_tokenizer, X)
            #a = set(a)
            words = a.split()
            #print('ANSWER: %s' % (thing))
            bot_conversations.append('Bot: ' + " ".join(sorted(set(words), key=words.index)))
            chat_data2 = (""+ " ".join(sorted(set(words), key=words.index)) + '\n')
            with open('chats.tsv', 'a') as file:
              file.write(chat_data + "\t" + chat_data2 )
      
           
    return render_template('reply.html', conversations=bot_conversations)

def main():
    app.run()

if __name__ == '__main__':
    main()