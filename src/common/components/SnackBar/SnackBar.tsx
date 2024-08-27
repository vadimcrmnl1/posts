import React from 'react';
import s from './SnackBar.module.css'
import {useAppSelector} from "../../../app/hooks";
import {selectError} from "../../../app/appSlice";


export const SnackBar = () => {
    const error = useAppSelector(selectError)

    return (
        <div>
            <div className={error === 'Something error...' ? s.snackbarOpened + ' ' + s.error : error ? s.snackbarOpened : s.snackbarClosed}>
                <div className={s.alert}>{error}</div>
            </div>
        </div>
    );
};
