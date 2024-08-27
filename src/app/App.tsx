import React from 'react';
import s from './App.module.css'
import {Header} from "../common/components/Header/Header";
import {Outlet} from "react-router-dom";
import {useAppDispatch} from "./hooks";
import {postsAPI} from "../services/PostsService";
import {fetchPosts} from "../features/Posts/postsSlice";
import {SnackBar} from "../common/components/SnackBar/SnackBar";
import {setError} from "./appSlice";

function App() {
    const dispatch = useAppDispatch()
    const {data: posts, error, isLoading} = postsAPI.useFetchAllPostsQuery()
    if (posts) {
        dispatch(fetchPosts(posts))
    } else if (error) {
        dispatch(setError('Something error...'))
        setTimeout(() => {
            dispatch(setError(''))
        }, 3000)
    }

    return (
        <div className={s.wrapper}>
            <Header/>
            <SnackBar/>
            {isLoading && <div className={s.loader}></div>}
            <div className={s.container}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
