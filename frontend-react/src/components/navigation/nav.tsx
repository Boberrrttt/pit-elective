import { navContent } from "../../content/navigation/nav.content"

const Navbar = () => {
    return (
        <div className="h-20 sticky top-0 z-50 w-full  bg-purple-950 px-5 ">
            <img src={navContent.astronaut} alt="astronaut" className="w-[5%] h-full" />
        </div>
    );
};

export default Navbar;
