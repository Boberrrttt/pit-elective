import { heroContent } from "../../content/hero/hero.content";

const HeroSection = () => {
    return (
        <section className="h-[90vh] w-full relative" id="hero">
            {/* Background Image */}
            <img
                src={heroContent.heroImg}
                alt="heroimg"
                className="w-full h-full object-cover opacity-45"
            />

            {/* Centered Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Predictive Maintenance Insights
                </h1>
                <p className="text-lg text-gray-200 mb-6 max-w-lg mx-auto">
                    Discover cutting-edge tools and data that empower businesses to anticipate maintenance needs, optimize operations, and minimize unexpected disruptions.
                </p>                
            </div>
        </section>
    );
};

export default HeroSection;
