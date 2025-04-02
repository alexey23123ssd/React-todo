import React from 'react'
import '../styles/post.css'
import MyButton from "./UI/button/MyButton.jsx";
import {useNavigate} from 'react-router-dom'

function Post(props) {
    const router = useNavigate()
    return (
        <div className='post'>
            <div className='postContent'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='postBtns'>
                <MyButton onClick={()=> router('/post/'+props.post.id)}>
                    Открыть
                </MyButton>
                <MyButton onClick={()=> props.removePost(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default Post
