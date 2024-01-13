from langchain_core.prompts import PromptTemplate

template = """Question: {question}

Answer: Let's think step by step."""
prompt = PromptTemplate.from_template(template)

chain = prompt | llm

question = "Who was the president in the year Justin Bieber was born?"
print(chain.invoke({"question": question}))
