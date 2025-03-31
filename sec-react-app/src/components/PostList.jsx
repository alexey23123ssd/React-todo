import React from 'react';
import Post from "./post.jsx";

const PostList = ({posts, title, deletePost}) => {
    if(!posts.length) {
        return (
            <div><h2 style={{textAlign:"center"}}>Постов нет!</h2></div>
        )
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
                {posts.map((post,index) =>
                    <Post  removePost={deletePost} number={index+1} post = {post} key={post.id} />
                )}
        </div>
    );
};

export default PostList;