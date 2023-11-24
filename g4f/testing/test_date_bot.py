import unittest
from date_bot import chatbot_logic

class TestDateBot(unittest.TestCase):
    def test_get_current_date(self):
        user_input = "What is the date today?"
        expected_output = "The current date is: <current_date>"
        self.assertEqual(chatbot_logic(user_input), expected_output)

    def test_get_date_by_input(self):
        user_input = "Show me the calendar for 2022-10-15"
        expected_output = "<calendar_output>"
        self.assertEqual(chatbot_logic(user_input), expected_output)

    def test_unknown_input(self):
        user_input = "Tell me a joke"
        expected_output = "I'm not sure what you're asking. Ask me about the date or calendar!"
        self.assertEqual(chatbot_logic(user_input), expected_output)

if __name__ == '__main__':
    unittest.main()