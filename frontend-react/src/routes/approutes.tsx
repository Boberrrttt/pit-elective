import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landing/landing.page"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes