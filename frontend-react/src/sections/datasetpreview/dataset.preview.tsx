import { useEffect } from "react";
import { useCSVData } from "../../hooks/useCSVData";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const DatasetPreview = () => {
    const { rowData, columnData } = useCSVData();

    if (!rowData || !columnData) {
        return <p>Loading...</p>; 
    }

    const defaultColDef = {
        sortable: true,
        filter: true,
    };

    return (
        <div className="h-[90vh] w-[90%] flex flex-col pt-20 items-center">
            <h1 className="text-white font-bold text-5xl mb-12">DATASET PREVIEW</h1>

            <div className="ag-theme-quartz h-[500px] w-full">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnData}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    );
};

export default DatasetPreview;
