import React, {useEffect} from 'react'
import {useState} from 'react'
import './styles/app.css'
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import {usePosts} from "./components/hooks/usePosts.js";
import PostService from "./API/PostService.js";
import MyLoader from "./components/UI/loader/MyLoader.jsx";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    },[])

    function createPost(newPost){
        setPosts([...posts, newPost])
        setModal(false)
    }

    function  removePost(post){
        const filteredPosts = posts.filter(p => p.id !== post.id)
        setPosts(filteredPosts);
    }

    async function fetchPosts(){
        setIsPostsLoading(true)
        const response = await PostService.getAll()
        setPosts(response)
        setIsPostsLoading(false)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop:'10px'}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} />
            {isPostsLoading ?
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'20px'}}>
                    <MyLoader/>
                </div>
                :
                <PostList deletePost={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"} />}
        </div>
    )
}

export default App
