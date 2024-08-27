import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectIsLoggedIn, setError, setIsLoggedIn} from "../../../app/appSlice";
import {fetchUser, selectUser, UserType} from "../../../features/Users/usersSlice";

export const Header = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const user = useAppSelector(selectUser)
    const handleLogout = () => {
        dispatch(fetchUser({} as UserType))
        dispatch(setIsLoggedIn(false))
        dispatch(setError(`Goodbye, ${user.username}`))
        setTimeout(() => {
            dispatch(setError(''))
        }, 3000)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.logoBlock}>
                    <NavLink className={s.link} to={'/'}>Posts - Code Commanders</NavLink>
                </div>
                {!isLoggedIn
                    ? <NavLink className={s.linkButton} to={'/login'}>Sign In</NavLink>
                    : <div className={s.logoutBlock}>
                        {user && <NavLink className={s.userLink} to={`/users/${user.username}`}>{user.username}</NavLink>}
                        <button className={s.linkButton} onClick={handleLogout}>Log Out</button>
                    </div>
                }
            </div>
        </div>
    );
};