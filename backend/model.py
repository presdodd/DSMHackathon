from openai import OpenAI
from dotenv import load_dotenv
import data_grabber

load_dotenv()
client = OpenAI()

context = data_grabber.get_info()
prompt = "Can you give me goldfish care tips?"
response = client.chat.completions.create(
  model = "gpt-3.5-turbo-0125",
  temperature = 0.8,
  max_tokens = 3000,
  messages = [
    {"role": "system", "content": "This is the prompt" + prompt + "This is the context" + context},
    {"role": "user", "content": "Using the prompt and the context, can you give me a summarized paragraph?"}
  ]
)
print(response.choices[0].message.content)

