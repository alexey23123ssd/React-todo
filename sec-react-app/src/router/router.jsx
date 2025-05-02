import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";

export const routes = [
    {path: '/about', component: About},
    {path: '/post', component: Posts},
    {path: '/post/:id', component: PostIdPage}
]