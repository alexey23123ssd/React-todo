import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton.jsx";
import {AuthContext} from "../../../context/context.js";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/post">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;