import React, {FC} from 'react';
import {CommentType} from "../commentsSlice";
import s from './Comment.module.css'

export const Comment: FC<CommentType> = ({email, id, name, postId, body}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.nameBlock}>
                    <div className={s.name}>
                        <span className={s.title}>Post #:</span>
                        <span className={s.description}>{postId}</span>
                    </div>
                    <div className={s.name}>
                        <span className={s.title}>Comment #:</span>
                        <span className={s.description}>{id}</span>
                    </div>
                    <div className={s.name}>
                        <span className={s.title}>Name:</span>
                        <span className={s.description}>{name}</span>
                    </div>
                    <div className={s.name}>
                        <span className={s.title}>Email:</span>
                        <span className={s.description}>{email}</span>
                    </div>
                </div>

                <div className={s.commentBlock}>
                    <div className={s.body}>
                        <span>{body}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
