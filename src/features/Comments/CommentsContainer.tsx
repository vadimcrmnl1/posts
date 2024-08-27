import React from 'react';
import s from './CommentsContainer.module.css'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchComments, selectComments} from "./commentsSlice";
import {postsAPI} from "../../services/PostsService";
import {useParams} from "react-router-dom";
import st from "../../app/App.module.css";
import {Comment} from "./Comment/Comment";
import {setError} from "../../app/appSlice";

export const CommentsContainer = () => {
    const dispatch = useAppDispatch()
    const comments = useAppSelector(selectComments)
    const postId = useParams().postId
    const {data: comms, error, isLoading} = postsAPI.useFetchCommentsQuery(Number(postId))
    if (Array.isArray(comms) && comms.length !== 0) {
        dispatch(fetchComments(comms))
    } else if (error) {
        dispatch(setError('Something error...'))
        setTimeout(() => {
            dispatch(setError(''))
        }, 3000)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {isLoading && <div className={st.loader}></div>}
                {comments && comments.map(com => {
                    return <Comment key={com.id}
                                    postId={com.postId}
                                    id={com.id}
                                    name={com.name}
                                    email={com.email}
                                    body={com.body}/>
                })}
            </div>
        </div>
    );
};
