from langchain_google_genai import GoogleGenerativeAI

from getpass import getpass

api_key = getpass()

llm = GoogleGenerativeAI(model="models/text-bison-001", google_api_key=api_key)
print(
    llm.invoke(
        "What are some of the pros and cons of Python as a programming language?"
    )
)

llm = GoogleGenerativeAI(model="gemini-pro", google_api_key=api_key)
print(
    llm.invoke(
        "What are some of the pros and cons of Python as a programming language?"
    )
)
