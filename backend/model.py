from openai import OpenAI
from dotenv import load_dotenv
import data_grabber
import requests


respons = ""

def send_query_request():
    url = 'http://localhost:5000/'  # Replace with your Flask app URL
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            result = data['result']  # Assuming the response has a 'result' field
            return result
        else:
            print('Error:', response.status_code)
            return None
    except Exception as e:
        print('Error:', e)
        return None

def load_model():
    load_dotenv()
    client = OpenAI()
    prompt = str(send_query_request())
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