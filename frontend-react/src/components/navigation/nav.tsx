import { navContent } from "../../content/navigation/nav.content"

const Navbar = () => {

    const handleScroll = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="h-20 sticky top-0 z-50 w-full flex justify-between items-center bg-purple-950 px-5 ">
            <img src={navContent.astronaut} alt="astronaut" className="w-[5%] h-full" />

            <ul className="flex gap-10 mr-10">
                {navContent.navItems.map((item, index) => (
                    <li
                        key={index}
                        className="text-white text-lg hover:cursor-pointer"
                        onClick={() => handleScroll(item.sectionId)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>            
        </div>
    );
};

export default Navbar;
