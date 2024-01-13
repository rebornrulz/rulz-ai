llm = GoogleGenerativeAI(model="gemini-pro", google_api_key=api_key)
print(
    llm.invoke(
        "What are some of the pros and cons of Python as a programming language?"
    )
)
