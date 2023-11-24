import unittest
from chatbot import chatbot_logic

class TestChatbotLogic(unittest.TestCase):

    def test_get_current_date(self):
        # Ensure that the current date is obtained and the format is correct
        current_date = chatbot_logic("What is the current date?")
        self.assertTrue("The current date is:" in current_date)

    def test_get_date_by_input_valid(self):
        # Test with a valid date input
        input_date = "2023-11-24"
        formatted_date = chatbot_logic(f"Show me the calendar for {input_date}")
        self.assertTrue("November 24, 2023" in formatted_date)

    def test_get_date_by_input_invalid(self):
        # Test with an invalid date input
        with self.assertRaises(ValueError) as context:
            chatbot_logic("Show me the calendar for 2023/11/24")
        self.assertTrue("Invalid date format" in str(context.exception))

    def test_default_response(self):
        # Test when the user input doesn't contain "date" or "calendar"
        default_response = chatbot_logic("Tell me a joke")
        self.assertEqual(default_response, "I'm not sure what you're asking. Ask me about the date or calendar!")

if __name__ == '__main__':
    unittest.main()