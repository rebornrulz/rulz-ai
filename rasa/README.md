# INTRODUCTION
This MAL (Multi-Task Active Learning) Bot is using Iban language. 
This chatbot illustrate a chatbot that built using Multi-Task Active Learning Learning Technique. 
The purposed of this chatbot is to preserved Iban Language by building Iban language dialogue corpus. 
The Iban dialogue corpus generated is in ".tsv" format.
The data size used in MAL Bot is 1500 utterances.
- 50 Greetings Utterances (25 questions, 25 answers) - Manually Built by Native Speaker (Me)
- 1350 Iban Grammar Utterances (675 questions, 675 answers) - Referred from Sistem Sepil Jaku Iban by Kementerian Pelajaran Sarawak
- 100 Casual Communication (50 questions, 50 answers)

# INSTALLATION
1. Firstly, download Miniconda Prompt from https://docs.conda.io/en/latest/miniconda.html suit to your operating system. Noted that the Python Version used is Python 3.7
2. Secondly, launch the Miniconda Prompt and set up Rasa Framework.
3. Use the following command:
  a. conda create -- name py37 python=3.7
  b. conda activate py37
  c. pip install rasa
  d. pip install rasa-x --extra-index-url https://pypi.rasa.com/simple
  e. rasa init
4. Open created rasa folder
5. Download the files or folder from this github and replace the folder and files that similar with the downloaded folders and files.
  
# Files Overview
1. data/stories.yml - Contains Stories used by bot to learn conversation flow
2. data/nlu.yml - Contain NLU data used by bot to understand user questions or intents
3. data/rules.yml - Contain Rules data that bot used to return a set response when a certain intents is identified.
4. domain.yml - Contain Domain data that used by bot to return response to user questions.
5. config.yml - Contain NLU pipeline and Dialgue Policy
6. actions.py - Used to Save and Generate Dialogue Corpus between user and chatbot is ".tsv" format.
7. The code shown as following:

        conversation=tracker.events
        print(conversation)
        import os
        #if file not exist, create file
        if not os.path.isfile('chats.tsv'):
            with open('chats.tsv','w') as file:
                file.write("user_input,\tbot_reply\n")
        chat_data=''
        for i in conversation:
            if i['event'] == 'user':
                chat_data+=i['text']+''
                print('user: {}'.format(i['text']))
                if len(i['parse_data']['entities']) > 0:
                    # chat_data+=i['parse_data']['entities'][0]['value']+'\t'
                    chat_data+="\t"
                    print('extra data:', i['parse_data']['entities'][0]['entity'], '=',
                          i['parse_data']['entities'][0]['value'])
                else:
                    chat_data+="\t"
            elif i['event'] == 'bot':
                print('Bot: {}'.format(i['text']))
                try:
                    chat_data+=i['text']+'\n'
                    # chat_data+=i['metadata']['utter_action']+','+i['text']+'\n'
                except KeyError:
                    pass
        else:
            #if file exist, append file content
            with open('chats.tsv','a') as file:
                file.write(chat_data)
                
# To TRAIN MAL BOT
1. Before able to chat with MAL BOT, train the bot first by the following methods:
- cd <location/filename> Eg: cd desktop/MAL BOT
- conda activate rasa
Choose one of the following:
- rasa train
- rasa interactive

# To RUN MAL BOT
1. Reopen Miniconda Prompt.
2. Use the following command:
- cd <location/filename> Eg: cd desktop/MAL BOT
- conda activate rasa
- rasa run actions

# To CHAT 
1. Open another Miniconda Prompt.
Use the following command:
- cd <location/filename> Eg: cd desktop/MAL BOT
- conda activate 
- rasa shell

  
# To TRAIN MAL BOT via Rasa X
1. Run the following command:
  a. rasa x
2. Copy the link generated. Eg: http://localhost:5002/conversations

# License
Licensed under the GNU General Public License v3. Copyright 2018 Rasa Technologies GmbH. Copy of the license. Licensees may convey the work under this license. There is no warranty for the work.