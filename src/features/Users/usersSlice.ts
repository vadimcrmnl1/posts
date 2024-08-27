import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}
const initialState = {
    user: {} as UserType
}
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
        }
    }
})
export const {fetchUser} = usersSlice.actions
export const selectUser = (state: RootState) => state.users.user
export const usersReducer = usersSlice.reducer