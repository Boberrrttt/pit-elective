import { useState } from "react";
import Navbar from "../../components/navigation/nav";
import axios from "axios";

const Dashboard = () => {
    const [inputValues, setInputValues] = useState({
        "UDI": 103,
        "Air temperature [K]": 0,
        "Process temperature [K]": 0,
        "Rotational speed [rpm]": 0,
        "Torque [Nm]": 0,
        "Tool wear [min]": 0
    });

    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Only convert the value to a number when necessary
        setInputValues((prevState) => ({ 
            ...prevState, 
            [name]: value === "" ? "" : Number(value) 
        }));
    };

    const handlePredict = async () => {
        try {
            console.log(inputValues);
            
            const response = await axios.post('http://127.0.0.1:3000/predict', inputValues);
            setResult(response.data.prediction);
            setError('');
        } catch (err: any) {
            setError(err.response?.data?.error || 'Something went wrong');
        }
    };

    const renderInputField = (inputValue: number, label: string, name: string) => {
        return (
            <div className="flex gap-4">
                <label
                    htmlFor={name}
                    className="text-white text-xl font-bold w-52"
                >
                    {label}
                </label>
                <input
                    type="text"
                    id={name}
                    name={name}
                    className="h-10 px-2"
                    value={inputValue === 0 ? '' : inputValue}  // Show empty string if 0
                    onChange={handleInputChange}
                />
            </div>
        );
    };

    return (
        <div className="w-screen h-screen relative flex items-center justify-center bg-purple-950">
            <Navbar/>
            <div className="flex flex-col justify-center gap-16 mt-16">
                <h1 className="font-bold text-white text-4xl text-center">INPUT DATA</h1>

                <div className="flex flex-col gap-10 items-center">
                    {renderInputField(inputValues["Air temperature [K]"], 'Air temperature [K]', 'Air temperature [K]')}
                    {renderInputField(inputValues["Process temperature [K]"], 'Process temperature [K]', 'Process temperature [K]')}
                    {renderInputField(inputValues["Rotational speed [rpm]"], 'Rotational speed [rpm]', 'Rotational speed [rpm]')}
                    {renderInputField(inputValues["Torque [Nm]"], 'Torque [Nm]', 'Torque [Nm]')}
                    {renderInputField(inputValues["Tool wear [min]"], 'Tool wear [min]', 'Tool wear [min]')}

                    <button
                        className="bg-white text-black font-bold py-2 px-8 mt-3 rounded"
                        onClick={handlePredict}
                    >
                        Predict
                    </button>
                </div>

                {result && <h2 className="mt-10">Prediction Result: {result}</h2>}
                {error && <p className="mt-10 text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default Dashboard;