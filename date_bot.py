from datetime import date, datetime

def get_current_date():
    today = date.today()
    return today.strftime("%B %d, %Y")

def get_date_by_input(input_date):
    try:
        date_obj = datetime.strptime(input_date, "%Y-%m-%d").date()
        return date_obj.strftime("%B %d, %Y")
    except ValueError as e:
        raise ValueError("Invalid date format. Please provide the date in the format YYYY-MM-DD.") from e

def chatbot_logic(user_input):
    user_input_lower = user_input.lower()
    
    if "date" in user_input_lower:
        return f"The current date is: {get_current_date()}"
    elif "calendar" in user_input_lower:
        # Extract the date from the user input (assuming YYYY-MM-DD format)
        date_query = user_input_lower.replace("calendar", "").strip()
        return get_date_by_input(date_query)
    else:
        return "I'm not sure what you're asking. Ask me about the date or calendar!"
