import { landingContent } from "../../content/landing/landing.content"

/**
 * The main landing page component.
 * This component contains the layout of the landing page,
 * including the background image, the title and subtitle, and the astronaut image.
 * 
 * @returns A JSX Element representing the landing page.
 */
const LandingPage = (): JSX.Element => {
    return (
        <div className="w-screen h-screen bg-landing-bg bg-cover bg-center flex justify-center items-center">
            {/* The planet image in the bottom left corner. */}
            <img src={landingContent.planetGif} className="absolute w-64 bottom-20 left-7 -rotate-90" alt="Planet" />

            {/* The star image in the top right corner. */}
            <img src={landingContent.starGif} className="absolute w-52 top-0 right-20" alt="Star" />

            {/* The main container that contains the title and subtitle. */}
            <div className="bg-black bg-opacity-30 flex items-center justify-center flex-col w-[80%] h-[90%] rounded-[50px] z-30">
                {/* The title and subtitle. */}
                <h1 className="text-white font-bold text-[70px] mb-5">
                    {/* The title. */}
                    <span className="block">AI-Powered Predictive</span>
                    {/* The subtitle. */}
                    <span>Maintenance Solutions</span>
                </h1>

                {/* The student names. */}
                <div className="text-white text-xl text-center mb-8">
                    <p className="mb-4">Submitted by:</p>
                    <p>John Fabian V. Butong</p>
                    <p>Robert Roy P. Salvo</p>
                </div>

                {/* The professor's name. */}
                <div className="text-white text-xl text-center">
                    <p className="mb-4">Submitted to:</p>
                    <p>Jodie Rey Fernandez</p>
                </div>

                {/* The button to start predicting. */}
                <a href="#_" className="relative inline-block text-lg group mt-10">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-purple-200"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Start Predicting</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-purple-800 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </div>
            
            {/* The astronaut image in the bottom right corner. */}
            <img src={landingContent.astronaut} className="absolute w-[470px] bottom-0 right-0 z-40" alt="Astronaut" />
        </div>
    )
}

export default LandingPage