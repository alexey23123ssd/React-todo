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
import {useFetching} from "./components/hooks/useFetching.js";
import {getPagesArray, getPagesCount} from "./utils/pages.js";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [fetchPosts,isPostsLoading,error] = useFetching(async ()=>{
        const response = await PostService.getAll(limit,page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount,limit))
    });

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = getPagesArray(totalPages)

    useEffect(() => {
        fetchPosts()
    },[page])

    function createPost(newPost){
        setPosts([...posts, newPost])
        setModal(false)
    }

    function  removePost(post){
        const filteredPosts = posts.filter(p => p.id !== post.id)
        setPosts(filteredPosts);
    }

    function changePage(pageNumber){
        setPage(pageNumber)
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
            {error && <h1>Произошла ошибка ${error}</h1>}
            {isPostsLoading ?
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'20px'}}>
                    <MyLoader/>
                </div>
                :
                <PostList deletePost={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"} />}
            <div className="page__wrapper">
                {pagesArray.map(p=><span
                    onClick={()=>changePage(p)}
                    key={p}
                    className={p === page ? "page page__current":"page"}>
                    {p}
                </span>)}
            </div>
        </div>
    )
}

export default App
