import pickle
from flask import Flask, request, jsonify
import numpy as np
import pandas as pd

# Load Random Forest Model
with open('app/models/random_forest_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Load Scaler
with open('app/models/scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

# Load Label Encoder
with open('app/models/label_encoder.pkl', 'rb') as encoder_file:
    label_encoder = pickle.load(encoder_file)

# Define your feature columns based on the training data
# Ensure "UDI" is included here if it was part of the training features
feature_columns = ['UDI', 'Air temperature [K]', 'Process temperature [K]', 
                   'Rotational speed [rpm]', 'Torque [Nm]', 'Tool wear [min]']

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello, World!'

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.get_json()

        # Ensure that the input JSON contains all the required features
        if not all(feature in data for feature in feature_columns):
            return jsonify({'error': 'Missing required features'}), 400

        # Convert the features into a pandas DataFrame with the correct column names
        input_df = pd.DataFrame([data], columns=feature_columns)

        # Scale the features using the same scaler that was used during training
        scaled_features = scaler.transform(input_df)

        # Predict using the model
        prediction = model.predict(scaled_features)

        # Decode the predicted label
        predicted_label = label_encoder.inverse_transform(prediction)[0]

        # Return the prediction as JSON
        return jsonify({'prediction': predicted_label})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=3000, debug=True)
