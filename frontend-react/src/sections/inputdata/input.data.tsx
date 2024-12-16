import axios from "axios";
import { useState } from "react";

const InputData = () => {
    const [inputValues, setInputValues] = useState({
        "UDI": 103.0,
        "Air temperature [K]": 0.0,
        "Process temperature [K]": 0.0,
        "Rotational speed [rpm]": 0.0,
        "Torque [Nm]": 0.0,
        "Tool wear [min]": 0.0
    });

    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
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
                    type="number"
                    id={name}
                    name={name}
                    className="h-10 px-2"
                    value={inputValue === 0 ? '' : inputValue}  // Show empty string if 0
                    onChange={handleInputChange}
                />
            </div>
        );
    };
     
    const renderResult = () => {
        if(result){
            if (result === 'No Failure') {
                return 'There is no risk of failure for your machine.';
            } else {
                return `The likelihood of failure for your machine is ${result}.`;
            }
            
        }
    }

    return (
        <section className="flex flex-col h-[100vh] gap-16 z-0 pt-20" id="input-data">
                <h1 className="font-bold text-white text-5xl text-center">INPUT DATA</h1>

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

                <div className="flex flex-col items-center gap-10 w-full">
                    <h1 className="font-bold text-white text-4xl">PREDICTION RESULT</h1>
                    <textarea
                        className="w-[600px] mb-32 text-black font-bold text-3xl text-center  p-4"
                        value={renderResult()}
                        readOnly
                    />
                </div>

                
                {error && <p className="mt-10 text-red-500">{error}</p>}
            </section> 
    )
}

export default InputData