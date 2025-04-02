import React from 'react'
import './styles/app.css'
import {BrowserRouter, Link, Route,Routes,} from "react-router-dom";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Navbar from "./components/UI/navbar/navbar.jsx";
import Error from "./pages/Error.jsx";
import AppRouter from "./components/AppRouter.jsx";



function App() {
    return (
        <BrowserRouter>
            <Navbar/>
                <AppRouter />
        </BrowserRouter>
    )
}

export default App
