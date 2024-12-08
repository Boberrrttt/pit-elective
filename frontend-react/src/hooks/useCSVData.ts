import { useEffect, useState } from "react"
import Papa from "papaparse"

export const useCSVData = () => {
    const [rowData, setRowData] = useState<any>([]);
    const [columnData, setColumnData] = useState<any>([]);

    /**
     * Fetch the CSV file as soon as the page loads.
     * Use Papa.parse to parse the CSV content.
     * Store the parsed data in state.
     */
    useEffect(() => {
        fetch("/predictive_maintenance.csv")
        .then((response) => response.text()) 
        .then((csvData) => {
            Papa.parse(csvData, {
                header: true, 
                complete: (result) => {
                    const parsedData = result.data as Record<string, any>[]; // Assert type as an array of records

                    if (parsedData.length > 0) {
                        const cols = Object.keys(parsedData[0]).map((key) => ({
                            headerName: key, 
                            field: key,      
                        }));
                        setColumnData(cols);
                    }
                    setRowData(parsedData);
                },
            });
        })
        .catch((error) => console.error("Error loading CSV file:", error));
    }, []);

    return { rowData, columnData }
}