import React from 'react'
import './styles/app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="about" element={<About />}/>
                <Route path="post" element={<Posts />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
