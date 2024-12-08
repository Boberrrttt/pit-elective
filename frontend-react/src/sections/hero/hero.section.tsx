import { heroContent } from "../../content/hero/hero.content";

const HeroSection = () => {
    return (
        <div className="h-[90vh] w-full relative">
            {/* Background Image */}
            <img
                src={heroContent.heroImg}
                alt="heroimg"
                className="w-full h-full object-cover opacity-45"
            />

            {/* Centered Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Download the Dataset
                </h1>
                <p className="text-lg text-gray-200 mb-6 max-w-lg mx-auto">
                    Gain insights from our comprehensive dataset, crafted to help you analyze predictive maintenance trends and unlock valuable information.
                </p>
                <a
                    href="#_"
                    className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
                >
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative">Download Now</span>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
