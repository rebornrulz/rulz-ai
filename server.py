from sql_ollama import chain as sql_ollama_chain

add_routes(app, sql_ollama_chain, path="/sql-ollama")
