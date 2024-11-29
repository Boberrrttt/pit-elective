import pickle
from flask import Flask, request, jsonify
import numpy as np
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(port=3000, debug=True)