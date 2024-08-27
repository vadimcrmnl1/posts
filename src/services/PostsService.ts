import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {PostType} from "../features/Posts/postsSlice";
import {UserType} from "../features/Users/usersSlice";
import {CommentType} from "../features/Comments/commentsSlice";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    tagTypes: ['User', 'Post', 'Comments'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<PostType[], void>({
            query: () => 'posts',
            providesTags: ['Post']
        }),
        login: build.query<UserType[], string>({
            query: (username: string) => ({
                url: `users?username=${username}`,
            }),
            providesTags: ['User'],
        }),
        fetchComments: build.query<CommentType[], number>({
            query: (postId: number) => ({
                url: `posts/${postId}/comments`
            }),
            providesTags: ['Comments']
        })
    })
})

