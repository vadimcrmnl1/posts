import React, {memo, useCallback, useState} from 'react';
import s from './SignIn.module.css'
import st from './../../../app/App.module.css'
import {postsAPI} from "../../../services/PostsService";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {fetchUser} from "../../../features/Users/usersSlice";
import {selectIsLoggedIn, setError, setIsLoggedIn} from "../../../app/appSlice";
import {Navigate} from "react-router-dom";

export const SignIn = memo(() => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [firstRequest, setFirstRequest] = useState<boolean>(true)
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const {data: user, error, isLoading} = postsAPI.useLoginQuery(userName, {
        skip: firstRequest,
    })

    if (Array.isArray(user) && user.length > 0) {
        dispatch(fetchUser(user[0]))
        dispatch(setIsLoggedIn(true))
        dispatch(setError(`Welcome, ${user[0].username}`))
        setTimeout(() => {
            dispatch(setError(''))
        }, 3000)
    } else if (user !== undefined && !firstRequest) {
        dispatch(setError('Username not found...'))
        setTimeout(() => {
            dispatch(setError(''))
            setFirstRequest(true)
        }, 3000)
    } else if (error && !firstRequest) {
        dispatch(setError('Something error...'))
        setTimeout(() => {
            dispatch(setError(''))
            setFirstRequest(true)
        }, 3000)
    }

const handleChangeInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
}, [value])
const handleSignIn = useCallback(() => {
    setFirstRequest(false)
    setUserName(value);
}, [value])
const handlePressEnter = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        setFirstRequest(false)
        setUserName(value);
    }
}, [value])
if (isLoggedIn) {
    return <Navigate to={'/'} replace={true}/>
}
return (
    <div className={s.wrapper}>
        {isLoading && <div className={st.loader}></div>}
        {error && <div></div>}
        <div className={s.container}>
            <div className={s.title}>Sign In</div>
            <div className={s.formContainer}>
                <input type="text" className={s.input} placeholder={'Type your username'}
                       value={value} onKeyDown={handlePressEnter}
                       onChange={handleChangeInputValue}/>
                <button className={s.input + ' ' + s.button} type={'submit'} onClick={handleSignIn}>Send Button
                </button>
            </div>
        </div>
    </div>
);
})
