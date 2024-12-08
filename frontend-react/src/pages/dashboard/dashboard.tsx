import Navbar from "../../components/navigation/nav";
import DatasetPreview from "../../sections/datasetpreview/dataset.preview";
import DefinitionSection from "../../sections/definition/definition.section";
import HeroSection from "../../sections/hero/hero.section";
import InputData from "../../sections/inputdata/input.data";

const Dashboard = () => {

    return (
        <div className="w-screen h-screen relative flex flex-col items-center overflow-y-scroll bg-purple-950">
            <Navbar/>

            <HeroSection/>
            
            <DatasetPreview/>            
            
            <DefinitionSection/>

            <InputData/>

        </div>
    );
};

export default Dashboard;