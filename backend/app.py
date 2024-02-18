from flask import Flask
from flask_cors import CORS
import model

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def my_data():
    response_body = {
        "response": model.respons
    }
    return response_body