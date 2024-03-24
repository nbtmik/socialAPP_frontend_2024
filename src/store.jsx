import {configureStore} from "@reduxjs/toolkit";
import { postofFollowingReducer, userReducer,allUsersReducer, userProfileReducer } from "./Reducers/User";
import { likeReducer, myPostsReducer, userPostsReducer } from "./Reducers/Post";

export const server = import.meta.env.VITE_SERVER;

const store = configureStore({
    reducer:{
        user:userReducer,
        postOfFollowing:postofFollowingReducer,
        allUsers: allUsersReducer,
        like:likeReducer,
        myPosts:myPostsReducer,
        userProfile: userProfileReducer,
        userPosts:userPostsReducer,
    }
});

export default store;