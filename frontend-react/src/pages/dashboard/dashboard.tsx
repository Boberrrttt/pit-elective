import { useState } from "react"
import Navbar from "../../components/navigation/nav"

const Dashboard = () => {
    const [inputs, setInputs] = useState()

    const handlePredict = () => {

    }
    
    return (
        <div className="w-screen h-screen relative flex items-center justify-center bg-purple-950">
            <Navbar/>  
            <div className="flex flex-col justify-center gap-16 mt-16">
                <h1 className="font-bold text-white text-4xl text-center">INPUT DATA</h1>
                
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex gap-4">
                        <h1 className="text-white text-xl font-bold w-52">Air Temperature [K]</h1>
                        <input type="text" className="h-10 px-2"/>
                    </div>

                    <div className="flex gap-4 items-center">
                        <h1 className="text-white text-xl font-bold w-52">Process temperature [K]</h1>
                        <input type="text" className="h-10 px-2"/>
                    </div>

                    <div className="flex gap-4 items-center">
                        <h1 className="text-white text-xl font-bold w-52">Rotational speed [rpm]</h1>
                        <input type="text" className="h-10 px-2"/>
                    </div>

                    <div className="flex gap-4 items-center">
                        <h1 className="text-white text-xl font-bold w-52">Torque [Nm]</h1>
                        <input type="text" className="h-10 px-2"/>
                    </div>

                    <div className="flex gap-4 items-center">
                        <h1 className="text-white text-xl font-bold w-52">Tool wear [min]</h1>
                        <input type="text" className="h-10 px-2"/>
                    </div>

                    <button className="bg-white text-black font-bold py-2 px-8 mt-3 rounded">
                        Predict
                    </button>
                </div>
            </div>
        </div>   
    )
}

export default Dashboard