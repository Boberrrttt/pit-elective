import { useCSVData } from "../../hooks/useCSVData";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect } from "react";

const DefinitionSection = () => {

    const { rowData, columnData } = useCSVData()

    const getFilteredData = (data:any, targetColumn: string) => {
        return data.map((row:any) => ({
            "UDI": row["UDI"], // Replace with exact column name from CSV
            "Product ID": row["Product ID"], // Replace with exact column name
            "type": row["Type"], // Replace with exact column name
            [targetColumn]: row[targetColumn], // Replace with exact column name
        }));
    }
    
    const renderDefinitions = (title: string, description: string, targetColumn: string) => {
        const filteredData = rowData ? getFilteredData(rowData, targetColumn) : [];
        const columns = filteredData.length > 0 ? Object.keys(filteredData[0]) : [];
        const columnDefs = columns.map((col) => ({
            headerName: col, // Display name of the column
            field: col, // Field name in the data
        }));

        return (
            <div>
                <div className="flex flex-col items-center mb-10 gap-5">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <p className="text-gray-300 text-center">
                        {description}
                    </p>
                </div>
                <div className="ag-theme-quartz h-[500px] w-full mb-10">
                    <AgGridReact
                        rowData={filteredData}
                        columnDefs={columnDefs}
                    />
                </div>
            </div>
        );
    }

    return (
        <section className="pt-20  flex flex-col items-center" id="definition">
            <h1 className="text-white font-bold text-5xl">DEFINITION</h1>

            <div className="flex flex-col text-white items-center space-y-4 mt-8 w-[87%]">
                {renderDefinitions(
                    "Air Temperature [K]",
                    "The temperature of the surrounding air, measured in Kelvin, which can influence machinery operation and wear.",
                    "Air temperature [K]"
                )}


                {renderDefinitions(
                    "Process Temperature [K]",
                    "The temperature within the machinery during operation, measured in Kelvin, critical for monitoring equipment performance.",
                    "Process temperature [K]"
                )}

                {renderDefinitions(
                    "Rotational Speed [rpm]",
                    "The speed at which a machine's component rotates, measured in revolutions per minute (rpm), indicating operational efficiency.",
                    "Rotational speed [rpm]"
                )}

                {renderDefinitions(
                    "Torque [Nm]",
                    "The force that causes rotation in a machine, measured in Newton-meters (Nm), directly related to mechanical performance.",
                    "Torque [Nm]"
                )}

                {renderDefinitions(
                    "Tool Wear [min]",
                    "The amount of wear experienced by the tool in minutes, a key factor in determining tool life and maintenance schedules.",
                    "Tool wear [min]"
                )}

                {renderDefinitions(
                    "Failure Type",
                    "The classification of machine failure, such as wear, overload, or other failure types, used for diagnostic and predictive maintenance.",
                    "Failure Type"
                )}
            </div>
        </section>
    );
};

export default DefinitionSection;
