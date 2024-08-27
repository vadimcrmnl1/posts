import React, {FC} from 'react';
import s from './Post.module.css'
import {PostType} from "../postsSlice";
import {NavLink, useNavigate} from "react-router-dom";

export const Post: FC<PostType> = ({title, body, id, userId}) => {
    const navigate = useNavigate();
    return (
            <div onClick={() => navigate(`/posts/${id}/comments`)} className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.logo}></div>
                    <div className={s.title}>{title}</div>
                    <div className={s.body}>{body}</div>
                </div>
            </div>

    );
};
