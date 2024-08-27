import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
export type CommentsState = {
    comments: CommentType[]
}
const initialState: CommentsState = {
    comments: [] as CommentType[]
}
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        fetchComments: (state, action: PayloadAction<CommentType[]>) => {
            state.comments = action.payload
        }
    }
})
export const {fetchComments} = commentsSlice.actions
export const selectComments = (state: RootState) => state.comments.comments
export const commentsReducer = commentsSlice.reducer