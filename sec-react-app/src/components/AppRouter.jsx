import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Error from "../pages/Error.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Login from "../pages/Login.jsx";
import {AuthContext} from "../context/context.js";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth ?
                <div>
                    <Routes>
                        <Route path="about" element={<About />}/>
                        <Route  path="post" element={<Posts />}/>
                        <Route  path="post/:id" element={<PostIdPage />}/>
                        <Route path="*" element={<Posts />}/>
                    </Routes>
                </div>
                :
                <div>
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<Login />}/>
                    </Routes>
                </div>
    );
};

export default AppRouter;