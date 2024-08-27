import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {appReducer} from "./appSlice";
import {postsReducer} from "../features/Posts/postsSlice";
import {postsAPI} from "../services/PostsService";
import {usersReducer} from "../features/Users/usersSlice";
import {commentsReducer} from "../features/Comments/commentsSlice";

const rootReducer = combineReducers({
    posts: postsReducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    app: appReducer,
    users: usersReducer,
    comments: commentsReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsAPI.middleware)

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
