import React from 'react'
import '../styles/post.css'
import MyButton from "./UI/button/MyButton.jsx";

function Post(props) {
    return (
        <div className='post'>
            <div className='postContent'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='postBtns'>
                <MyButton onClick={()=> props.removePost(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default Post
