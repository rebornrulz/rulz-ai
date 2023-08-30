# INTRODUCTION
This Seq2Seq (Sequence to Sequence) Bot is using Iban language. This chatbot illustrate a chatbot that built using Sequence to Sequence Learning with Attention Decoder Technique. 
The purposed of this chatbot is to preserved Iban Language by building Iban language dialogue corpus. 
The Iban dialogue corpus generated is in ".tsv" format. The data size used in Seq2Seq Bot is 1500 utterances.
The Corpus is in ".tsv" format:
 -> <question> </tab> <answer>
The content are as the following:
a. 50 Greetings Utterances (25 questions, 25 answers) - Manually Built by Native Speaker (Me)
b. 1350 Iban Grammar Utterances (675 questions, 675 answers) - Referred from Sistem Sepil Jaku Iban by Kementerian Pelajaran Sarawak
c. 100 Casual Communication (50 questions, 50 answers)

# NO INSTALLATION REQUIRED
1. Download all folders and files from this github.
2. Open this Google Colaboratory: https://colab.research.google.com/drive/1Ul_TttrBMX69Tr1lBrGMWitAhRl72rqN?usp=sharing
3. Upload all the folders and files.
4. Run the code based on the sequence set in Google Colaboratory

# Data Pre-Processing
1. Data pre-processing is in 01_preprocessing.py - This code removed symbols and lowercase the corpus content

# Training
1. The model used is Seq2Seq with Attention Decoder. This code is in 02_training.py. The chatbot will learn from corpus by this code.

Code Snippet:
def modelSeq2Seq(vocab, timesteps, n_units, encoder, decoder, attention):
    model = Sequential()
    model.add(Embedding(vocab, n_units, input_length=timesteps, mask_zero=True))
    if(encoder == "LSTM"):
        model.add(LSTM(n_units, return_sequences=False, dropout=0.5, recurrent_dropout=0.5))
    
    model.add(RepeatVector(timesteps))
    if(decoder == "LSTM"):
        model.add(LSTM(n_units, return_sequences=True, dropout=0.5, recurrent_dropout=0.5))
    
    model.add(BatchNormalization())
    if(attention == "ATTNDECODER"):
        model.add(AttentionDecoder(n_units, vocab))

    return model

# Chatting
1. This code is used to start conversation with chatbot. The code is in 03_chatting.py
2. The code part for generating conversation of user and chatbot is also included in this code.

Code Snippet:
while(True):
    q = (input(str("You: ")))
    user = q
    chat_data = q + "\t"
    if user == 'bye':
      break   
    q = q.strip().split('\n')
    #we tokenize
    X = all_tokenizer.texts_to_sequences(q)
    X = pad_sequences(X, maxlen=all_length, padding='post')
        
    # find reply and print it out
    a = translate(model, all_tokenizer, X)
    words = a.split()
    chat_data2 = (""+ " ".join(sorted(set(words), key=words.index)) + '\n')
    print ('Bot: ' + " ".join(sorted(set(words), key=words.index)))
    with open('chats.tsv', 'a') as file:
        file.write(chat_data + "\t" + chat_data2 )
print("Simpan Chat tu? Taip 'au' tauka 'enda'. File chat enda disimpan enti nuan madah 'enda'.")
choice = input("Pilih: ")
if choice=='enda':
  if os.path.exists("chats.tsv"):
    os.remove("chats.tsv")
    print('File chat enda disimpan.')
else:
  print('File chat disimpan ba "chats.tsv".')
  
# Launching Interface via flask_NGROK
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

# License
The license for using Keras Framework and be referred to this source: https://github.com/keras-team/keras/blob/master/LICENSE
 
