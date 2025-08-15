import { Routes, Route } from "react-router-dom";
import { Login } from "../index"

export function MyRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            
        </Routes>
    )
}