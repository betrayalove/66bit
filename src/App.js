import Main from "./pages/Main";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Themes from "./pages/Themes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/themes' element={<Themes/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;