import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export type AppState = {
    isLoggedIn: boolean
    error: string
}
const initialState: AppState = {
    isLoggedIn: false,
    error: ''
}
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})
export const {setIsLoggedIn, setError} = appSlice.actions
export const selectIsLoggedIn = (state: RootState) => state.app.isLoggedIn
export const selectError = (state: RootState) => state.app.error
export const appReducer = appSlice.reducer