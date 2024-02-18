from flask import Flask, request, jsonify
import flask
from flask_cors import CORS
import model

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def my_data():

    # Check if request contains JSON data
    if request.json:
        data = request.json  # Get JSON data from the request
        # print(data)
        # call the model
        model_call = {"message": model.load_model(data['text'])}
        return jsonify(model_call)
    else:
        return jsonify({'error': 'Request must contain JSON data'}), 400

