import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../components/hooks/useFetching.js";
import PostService from "../API/PostService.js";
import MyLoader from "../components/UI/loader/MyLoader.jsx";
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id)=>{
        const response = await PostService.getById(id);
        console.log(response.data);
        setPost(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id)
    },[])
    return (
        <div>
            <h1>Вы открыли страницу поста с ID={params.id}!</h1>
            {isLoading ?
                <MyLoader/>
                :
                <div>{post.id},{post.title}</div>
            }
        </div>
    );
};

export default PostIdPage;