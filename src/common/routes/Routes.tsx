import {createBrowserRouter} from "react-router-dom";
import App from "../../app/App";
import {SignIn} from "../components/SignIn/SignIn";
import {PostsContainer} from "../../features/Posts/PostsContainer";
import {User} from "../../features/Users/User/User";
import {CommentsContainer} from "../../features/Comments/CommentsContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/login',
                element: <SignIn/>
            },
            {
                path: '/',
                element: <PostsContainer/>
            },
            {
                path: '/users/:username',
                element: <User/>
            },
            {
                path: '/posts/:postId/comments',
                element: <CommentsContainer/>
            }
        ]
    }
])
export default router