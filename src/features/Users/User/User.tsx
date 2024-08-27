import React from 'react';
import s from './User.module.css'
import st from './../../../common/components/SignIn/SignIn.module.css'
import {useAppSelector} from "../../../app/hooks";
import {selectUser} from "../usersSlice";
import {selectIsLoggedIn} from "../../../app/appSlice";
import {Navigate} from "react-router-dom";

export const User = () => {
    const user = useAppSelector(selectUser)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={'/'} replace={true}/>
    }
    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                <div className={st.title}>{user.username}</div>
                <div className={s.userContainer}>
                    <div className={s.userDescription}>
                        <span className={s.description}>Name:</span>
                        <span className={s.descValue}>{user.name}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>Email:</span>
                        <span className={s.descValue}>{user.email}</span>
                    </div>
                    <span className={s.descBlock}>Address</span>
                    <div className={s.userDescription}>
                        <span className={s.description}>City:</span>
                        <span className={s.descValue}>{user.address.city}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>Street:</span>
                        <span className={s.descValue}>{user.address.street}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>Suite:</span>
                        <span className={s.descValue}>{user.address.suite}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>Zipcode:</span>
                        <span className={s.descValue}>{user.address.zipcode}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>Phone:</span>
                        <span className={s.descValue}>{user.phone}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>Website:</span>
                        <span className={s.descValue}>{user.website}</span>
                    </div>
                    <span className={s.descBlock}>Company</span>
                    <div className={s.userDescription}>
                        <span className={s.description}>Name:</span>
                        <span className={s.descValue}>{user.company.name}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>Catch Phrase:</span>
                        <span className={s.descValue}>{user.company.catchPhrase}</span>
                    </div>
                    <div className={s.userDescription}>
                        <span className={s.description}>BS:</span>
                        <span className={s.descValue}>{user.company.bs}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
