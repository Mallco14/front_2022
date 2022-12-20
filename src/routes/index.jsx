import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductosPage } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductosPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router