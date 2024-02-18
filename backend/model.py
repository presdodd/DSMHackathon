from openai import OpenAI
from dotenv import load_dotenv
import data_grabber

respons = ""

def load_model():
    load_dotenv()
    client = OpenAI()
    prompt = "Can you give me goldfish care tips?"
    context = data_grabber.get_info(prompt)
    response = client.chat.completions.create(
        model = "gpt-3.5-turbo-0125",
        temperature = 0.8,
        max_tokens = 3000,
        messages = [
            {"role": "system", "content": "This is the prompt" + prompt + "This is the context" + context},
            {"role": "user", "content": "Using the prompt and the context, can you give me a summarized paragraph?"}
        ]
        )
    chat_resp = response.choices[0].message.content
    return chat_resp

respons = load_model()