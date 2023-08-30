# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"
from typing import Any, Text, Dict, List

import rasa.core.tracker_store
from rasa.shared.core.trackers import DialogueStateTracker
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionSaveConversation(Action):

    def name(self) -> Text:
        return "action_save_conversation"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

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

        dispatcher.utter_message(text="All Chats saved.")
        
        return []
