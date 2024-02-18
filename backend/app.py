from flask import Flask
import model

api = Flask(__name__)
@api.route('/')
def my_data():
    response_body = {
       "response": model.respons
    }
    return response_body