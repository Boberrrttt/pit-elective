import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score
from imblearn.over_sampling import SMOTE
from imblearn.ensemble import BalancedRandomForestClassifier


# Load dataset
csv = pd.read_csv('D:\\Code\\python\\ml-practice\\data\\predictive-maintenance-2\\predictive_maintenance.csv')

# Encode 'Failure Type' into numerical labels
label_encoder = LabelEncoder()
csv['Failure Type'] = label_encoder.fit_transform(csv['Failure Type'])

# Select numeric columns (exclude non-numeric like 'Product ID' and 'Type')
numeric_data = csv.select_dtypes(include=['number'])

# Split features (X) and target (y)
x = numeric_data.drop(columns=['Target', 'Failure Type'])  # Drop target columns not needed for training
y = numeric_data['Failure Type']

# Train-test split
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)

# Scale the data using StandardScaler
scaler = StandardScaler()
x_train_scaled = scaler.fit_transform(x_train)
x_test_scaled = scaler.transform(x_test)

# Balanced Random Forest
model = BalancedRandomForestClassifier(random_state=0, n_estimators=200)
model.fit(x_train_scaled, y_train)  

y_pred = model.predict(x_test_scaled)

# Display results
print(f"\n=== Training Gradient Boosting ===")
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print("Confusion Matrix:")
cm = confusion_matrix(y_test, y_pred)
print(cm)
print("\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=label_encoder.classes_))

# Save the model, scaler, and label encoder
with open('random_forest_model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

with open('scaler.pkl', 'wb') as scaler_file:
    pickle.dump(scaler, scaler_file)

with open('label_encoder.pkl', 'wb') as encoder_file:
    pickle.dump(label_encoder, encoder_file)


# Adding prediction for new inputs:
def predict_new_data(input_data):
    # Ensure input_data has the same columns as training data
    input_df = pd.DataFrame([input_data])
    
    # Match columns with training data
    expected_columns = x.columns  # Columns used for training
    input_df = input_df[expected_columns]  # Reorder columns if necessary

    # Scale the input using the same scaler
    scaled_input = scaler.transform(input_df)

    # Predict using the model
    prediction = model.predict(scaled_input)

    # Decode the label
    predicted_label = label_encoder.inverse_transform(prediction)[0]
    
    return predicted_label

# Example input to predict Heat Dissipation Failure
input_data = {
    "UDI": 103,
    "Air temperature [K]": 330.0,
    "Process temperature [K]": 400.0,
    "Rotational speed [rpm]": 300,
    "Torque [Nm]": 5.0,
    "Tool wear [min]": 150
}


predicted_result = predict_new_data(input_data)
print(f"Prediction for new data: {predicted_result}")
