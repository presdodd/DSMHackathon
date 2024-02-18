from openai import OpenAI
from dotenv import load_dotenv
import data_grabber
import requests


respons = ""

# def send_query_request():
#     url = 'http://localhost:5000/'  # Replace with your Flask app URL
#     try:
#         response = requests.get(url)
#         if response.status_code == 200:
#             data = response.json()
#             result = data['result']  # Assuming the response has a 'result' field
#             return result
#         else:
#             print('Error:', response.status_code)
#             return None
#     except Exception as e:
#         print('Error:', e)
#         return None

def load_model(data):

    load_dotenv()
    client = OpenAI()
    prompt = str(data["text"])
    context = data_grabber.get_info(prompt,data["isDiagnosis"])
    response = client.chat.completions.create(
            model = "gpt-3.5-turbo-0125",
            temperature = 0.8,
            max_tokens = 3000,
            messages = [
                {"role": "system", "content": "Use this context to answer the following prompt. \
Make sure to be succinct and reply in terms of the provided context.\nContext: " + context+"\n"},
                {"role": "user", "content": "Prompt: "+prompt}
            ]
            )
    chat_resp = response.choices[0].message.content
    if data["isDiagnosis"]:
        chat_resp = data_grabber.get_treatment(chat_resp) 
    # print(chat_resp)
    return chat_resp