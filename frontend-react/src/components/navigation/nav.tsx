import { navContent } from "../../content/navigation/nav.content"

const Navbar = () => {
    return (
        <div className="w-screen h-20 border-2 px-3 py-2">
            <img src={navContent.astronaut} className="h-full " alt="Astronaut" />
        </div>
    )
}

export default Navbar