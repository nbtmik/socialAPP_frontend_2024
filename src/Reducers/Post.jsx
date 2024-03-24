import { createReducer , createAction } from "@reduxjs/toolkit";

const LIKE_REQUEST = createAction('LIKE_REQUEST');
const LIKE_SUCCESS = createAction('LIKE_SUCCESS');
const LIKE_FAILURE = createAction('LIKE_FAILURE');
const COMMENT_REQUEST = createAction('COMMENT_REQUEST');
const COMMENT_SUCCESS = createAction('COMMENT_SUCCESS');
const COMMENT_FAILURE = createAction('COMMENT_FAILURE');
const DELETE_COMMENT_REQUEST = createAction('DELETE_COMMENT_REQUEST');
const DELETE_COMMENT_SUCCESS = createAction('DELETE_COMMENT_SUCCESS');
const DELETE_COMMENT_FAILURE = createAction('DELETE_COMMENT_FAILURE');
const MY_POST_REQUEST = createAction('MY_POST_REQUEST');
const MY_POST_SUCCESS = createAction('MY_POST_SUCCESS');
const MY_POST_FAILURE = createAction('MY_POST_FAILURE');
const NEW_POST_REQUEST = createAction('NEW_POST_REQUEST');
const NEW_POST_SUCCESS = createAction('NEW_POST_SUCCESS');
const NEW_POST_FAILURE = createAction('NEW_POST_FAILURE');
const UPDATE_POST_REQUEST = createAction('UPDATE_POST_REQUEST');
const UPDATE_POST_SUCCESS = createAction('UPDATE_POST_SUCCESS');
const UPDATE_POST_FAILURE = createAction('UPDATE_POST_FAILURE');
const UPDATE_PROFILE_REQUEST = createAction('UPDATE_PROFILE_REQUEST');
const UPDATE_PROFILE_SUCCESS = createAction('UPDATE_PROFILE_SUCCESS');
const UPDATE_PROFILE_FAILURE = createAction('UPDATE_PROFILE_FAILURE');
const UPDATE_PASSWORD_REQUEST = createAction('UPDATE_PASSWORD_REQUEST');
const UPDATE_PASSWORD_SUCCESS = createAction('UPDATE_PASSWORD_SUCCESS');
const UPDATE_PASSWORD_FAILURE = createAction('UPDATE_PASSWORD_FAILURE');
const DELETE_POST_REQUEST = createAction('DELETE_POST_REQUEST');
const DELETE_POST_SUCCESS = createAction('DELETE_POST_SUCCESS');
const DELETE_POST_FAILURE = createAction('DELETE_POST_FAILURE');
const DELETE_PROFILE_REQUEST = createAction('DELETE_PROFILE_REQUEST');
const DELETE_PROFILE_SUCCESS = createAction('DELETE_PROFILE_SUCCESS');
const DELETE_PROFILE_FAILURE = createAction('DELETE_PROFILE_FAILURE');
const FORGOT_PASSWORD_REQUEST = createAction('FORGOT_PASSWORD_REQUEST');
const FORGOT_PASSWORD_SUCCESS = createAction('FORGOT_PASSWORD_SUCCESS');
const FORGOT_PASSWORD_FAILURE = createAction('FORGOT_PASSWORD_FAILURE');
const RESET_PASSWORD_REQUEST = createAction('RESET_PASSWORD_REQUEST');
const RESET_PASSWORD_SUCCESS = createAction('RESET_PASSWORD_SUCCESS');
const RESET_PASSWORD_FAILURE = createAction('RESET_PASSWORD_FAILURE');
const USER_POST_REQUEST = createAction('USER_POST_REQUEST');
const USER_POST_SUCCESS = createAction('USER_POST_SUCCESS');
const USER_POST_FAILURE = createAction('USER_POST_FAILURE');
const FOLLOW_USER_REQUEST = createAction('FOLLOW_USER_REQUEST');
const FOLLOW_USER_SUCCESS = createAction('FOLLOW_USER_SUCCESS');
const FOLLOW_USER_FAILURE = createAction('FOLLOW_USER_FAILURE');
const CLEAR_ERRORS = createAction('CLEAR_ERRORS');
const CLEAR_MESSAGE = createAction('CLEAR_MESSAGE');

const initialState = {
  //loading: true,
  //isAuthenticated: false,
};

export const likeReducer = createReducer(initialState, (builder) => {
    builder
   .addCase(LIKE_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(LIKE_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(LIKE_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(COMMENT_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(COMMENT_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(COMMENT_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(DELETE_COMMENT_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(DELETE_COMMENT_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(DELETE_COMMENT_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(NEW_POST_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(NEW_POST_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(NEW_POST_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(UPDATE_POST_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(UPDATE_POST_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(UPDATE_POST_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(DELETE_POST_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(DELETE_POST_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(DELETE_POST_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(UPDATE_PROFILE_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(UPDATE_PROFILE_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(UPDATE_PROFILE_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(UPDATE_PASSWORD_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(UPDATE_PASSWORD_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(UPDATE_PASSWORD_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(DELETE_PROFILE_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(DELETE_PROFILE_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(DELETE_PROFILE_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(FORGOT_PASSWORD_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(FORGOT_PASSWORD_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(FORGOT_PASSWORD_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(RESET_PASSWORD_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(RESET_PASSWORD_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(RESET_PASSWORD_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(FOLLOW_USER_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(FOLLOW_USER_SUCCESS, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(FOLLOW_USER_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(CLEAR_ERRORS, (state)=>{
    state.error = null;
  })
  .addCase(CLEAR_MESSAGE, (state)=>{
    state.message = null;
  })
});

export const myPostsReducer = createReducer(initialState, (builder) => {
  builder
 .addCase(MY_POST_REQUEST, (state) => {
  state.loading = true;
})
.addCase(MY_POST_SUCCESS, (state, action) => {
  state.loading = false;
  state.posts = action.payload;
  //state.isAuthenticated = true;
})
.addCase(MY_POST_FAILURE, (state, action) => {
  state.loading = false;
  state.error = action.payload;
  //state.isAuthenticated = false;
})
.addCase(CLEAR_ERRORS, (state)=>{
  state.error = null;
})
});

export const userPostsReducer = createReducer(initialState, (builder) => {
  builder
 .addCase(USER_POST_REQUEST, (state) => {
  state.loading = true;
})
.addCase(USER_POST_SUCCESS, (state, action) => {
  state.loading = false;
  state.posts = action.payload;
  //state.isAuthenticated = true;
})
.addCase(USER_POST_FAILURE, (state, action) => {
  state.loading = false;
  state.error = action.payload;
  //state.isAuthenticated = false;
})
.addCase(CLEAR_ERRORS, (state)=>{
  state.error = null;
})
});
