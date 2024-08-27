import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export type PostType = {
    id: number
    title: string
    body: string
    userId: number
}
export type PostsState = {
    posts: PostType[]
}
const initialState: PostsState = {
    posts: [] as PostType[],
}
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<PostType[]>) => {
            state.posts = action.payload
        }
    }
})
export const {fetchPosts} = postsSlice.actions
export const selectPosts = (state: RootState) => state.posts.posts
export const postsReducer = postsSlice.reducer