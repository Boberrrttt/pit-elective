import Navbar from "../../components/navigation/nav";
import DatasetPreview from "../../sections/datasetpreview/dataset.preview";
import DefinitionSection from "../../sections/definition/definition.section";
import HeroSection from "../../sections/hero/hero.section";
import InputData from "../../sections/inputdata/input.data";

/**
 * The main dashboard component.
 * This component contains the layout of the dashboard page,
 * including the navigation bar, hero section, dataset preview, definition section, and input data section.
 * 
 * @returns A JSX Element representing the dashboard page.
 */
const Dashboard = () => {

    return (
        <div className="w-screen h-screen relative flex flex-col items-center overflow-y-scroll bg-purple-950">
            {/* Navigation bar component */}
            <Navbar/>
            
            {/* Hero section component */}
            <HeroSection/>
            
            {/* Dataset preview component */}
            <DatasetPreview/>
            
            {/* Definition section component */}
            <DefinitionSection/>
            
            {/* Input data component */}
            <InputData/>
        </div>
    );
};

export default Dashboard;