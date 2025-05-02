import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../components/hooks/useFetching.js";
import PostService from "../API/PostService.js";
import MyLoader from "../components/UI/loader/MyLoader.jsx";
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id)=>{
        const response = await PostService.getById(id);
        console.log(response.data);

        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id)=>{
        const response = await PostService.getCommentsByPostId(id);
        console.log(response.data);

        setComments(response.data);
    })
    useEffect(() => {
        console.log(params);
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>Вы открыли страницу поста с ID={params.id}!</h1>
            {   isLoading ?
                    <MyLoader/>
                    :
                    <div>{post.id},{post.title}</div>
            }
            <h2>Комментарии:</h2>
            {isComLoading ?
                    <MyLoader/>
                    :
                    <div>
                        {comments.map(comment=>
                            <div key={comment.id}>
                                <h3>{comment.email}</h3>
                                <p>{comment.body}</p>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PostIdPage;