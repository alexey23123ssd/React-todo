import React, {useEffect, useState} from 'react'
import './styles/app.css'
import {BrowserRouter, Link, Route,Routes,} from "react-router-dom";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Navbar from "./components/UI/navbar/navbar.jsx";
import Error from "./pages/Error.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/context.js";



function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
