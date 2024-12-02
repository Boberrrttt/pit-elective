import { navContent } from "../../content/navigation/nav.content"

const Navbar = () => {
    return (
        <div className="w-screen fixed top-0 h-20 shadow-xl px-3 py-2">
            <img src={navContent.astronaut} className="h-full " alt="Astronaut" />
        </div>
    )
}

export default Navbar