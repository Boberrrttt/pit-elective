import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landing/landing.page"
import Dashboard from "../pages/dashboard/dashboard"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes