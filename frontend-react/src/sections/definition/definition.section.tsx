import { useCSVData } from "../../hooks/useCSVData";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const DefinitionSection = () => {

    const { rowData, columnData } = useCSVData()

    const renderDefinitions = (title: string, description: string) => {
        return (
            <div className="text-center">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-gray-300">
                    {description}
                </p>
                
            </div>
        );
    }

    return (
        <div className="pt-20 h-[90vh] flex flex-col items-center">
            <h1 className="text-white font-bold text-5xl">DEFINITION</h1>

            <div className="flex flex-col text-white items-center space-y-4 mt-8">
                {renderDefinitions(
                    "Air Temperature [K]",
                    "The temperature of the surrounding air, measured in Kelvin, which can influence machinery operation and wear."
                )}

                {renderDefinitions(
                    "Process Temperature [K]",
                    "The temperature within the machinery during operation, measured in Kelvin, critical for monitoring equipment performance."
                )}

                {renderDefinitions(
                    "Rotational Speed [rpm]",
                    "The speed at which a machine's component rotates, measured in revolutions per minute (rpm), indicating operational efficiency."
                )}

                {renderDefinitions(
                    "Torque [Nm]",
                    "The force that causes rotation in a machine, measured in Newton-meters (Nm), directly related to mechanical performance."
                )}

                {renderDefinitions(
                    "Tool Wear [min]",
                    "The amount of wear experienced by the tool in minutes, a key factor in determining tool life and maintenance schedules."
                )}

                {renderDefinitions(
                    "Failure Type",
                    "The classification of machine failure, such as wear, overload, or other failure types, used for diagnostic and predictive maintenance."
                )}
            </div>
        </div>
    );
};

export default DefinitionSection;
