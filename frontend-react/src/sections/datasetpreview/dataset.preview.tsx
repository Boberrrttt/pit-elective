import { useEffect, useState } from "react"
import Papa from "papaparse"

const DatasetPreview = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        // Fetch the CSV file as soon as the page loads
        fetch("/predictive_maintenance.csv")
          .then((response) => response.text()) // Get the CSV file content as text
          .then((csvData) => {
            // Parse the CSV content using PapaParse
            Papa.parse(csvData, {
              header: true, // Treat the first row as headers
              complete: (result) => {
                setData(result.data); // Store parsed data in state
              },
            });
          })
          .catch((error) => console.error("Error loading CSV file:", error));
      }, []);

    return (
        <div className="h-[90vh] w-[90%] flex flex-col pt-20 items-center">
        <h1 className="text-white font-bold text-5xl mb-12">DATASET PREVIEW</h1>
        <div className="w-full overflow-y-scroll">
            <table className="table-auto border-collapse border-2 text-white ">
                <thead>
                    <tr>
                        {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                            <th key={index} className="text-center px-4 py-2 border-2 bg-cyan-600 text-purple-950 ">
                                {key}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: any, index: any) => (
                        <tr key={index}>
                            {Object.values(row).map((value: any, colIndex: any) => (
                                <td key={colIndex} className="text-center px-4 py-2 border-2 border-white">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    )
}

export default DatasetPreview