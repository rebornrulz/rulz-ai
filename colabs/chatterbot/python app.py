from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

rulzBot = ChatBot("Rulz-AI", storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(rulzBot)
trainer.train("chatterbot.corpus.english")  # train the chatbot with English corpus

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(rulzBot.get_response(userText))

if __name__ == "__main__":
    app.run()