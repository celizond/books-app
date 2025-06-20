import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomePage } from "./components/HomePage"
import { AboutPage } from "./components/AboutPage"
import { LoginPage } from "./components/LoginPage"

export const App = () => {
    return (
        <>
            <NavBar />
            <hr />

            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/*'} element={<Navigate to={"/login"} />} />
            </Routes>

        </>
    )
}
