import React from 'react';
import s from './PostsContainer.module.css'
import {Post} from "./Post/Post";
import {useAppSelector} from "../../app/hooks";
import {selectPosts} from "./postsSlice";

export const PostsContainer = () => {
    const posts = useAppSelector(selectPosts)
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {posts && posts.map(post => {
                    return <Post key={post.id}
                                 id={post.id}
                                 title={post.title}
                                 body={post.body}
                                 userId={post.userId}/>
                })}
            </div>
        </div>
    );
};
