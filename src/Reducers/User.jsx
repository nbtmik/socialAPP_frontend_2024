import { createReducer , createAction } from "@reduxjs/toolkit";

const LOGIN_USER_REQUEST = createAction('LOGIN_USER_REQUEST');
const LOGIN_USER_SUCCESS = createAction('LOGIN_USER_SUCCESS');
const LOGIN_USER_FAILURE = createAction('LOGIN_USER_FAILURE');
const LOGOUT_USER_REQUEST = createAction('LOGOUT_USER_REQUEST');
const LOGOUT_USER_SUCCESS = createAction('LOGOUT_USER_SUCCESS');
const LOGOUT_USER_FAILURE = createAction('LOGOUT_USER_FAILURE');
const REGISTER_USER_REQUEST = createAction('REGISTER_USER_REQUEST');
const REGISTER_USER_SUCCESS = createAction('REGISTER_USER_SUCCESS');
const REGISTER_USER_FAILURE = createAction('REGISTER_USER_FAILURE');
const LOAD_USER_REQUEST = createAction('LOAD_USER_REQUEST');
const LOAD_USER_SUCCESS = createAction('LOAD_USER_SUCCESS');
const LOAD_USER_FAILURE = createAction('LOAD_USER_FAILURE');
const POST_FOLLOWING_REQUEST = createAction('POST_FOLLOWING_REQUEST');
const POST_FOLLOWING_SUCCESS = createAction('POST_FOLLOWING_SUCCESS');
const POST_FOLLOWING_FAILURE = createAction('POST_FOLLOWING_FAILURE');
const ALL_USERS_REQUEST = createAction('ALL_USERS_REQUEST');
const ALL_USERS_SUCCESS = createAction('ALL_USERS_SUCCESS');
const ALL_USERS_FAILURE = createAction('ALL_USERS_FAILURE');
const USER_PROFILE_REQUEST = createAction('USER_PROFILE_REQUEST');
const USER_PROFILE_SUCCESS = createAction('USER_PROFILE_SUCCESS');
const USER_PROFILE_FAILURE = createAction('USER_PROFILE_FAILURE');

const CLEAR_ERRORS = createAction('CLEAR_ERRORS');

const initialState = {
  //loading: true,
  //isAuthenticated: false,
};

//login+register+load user
export const userReducer = createReducer(initialState, (builder) => {
    builder
   .addCase(LOGIN_USER_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(LOGIN_USER_SUCCESS, (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  })
  .addCase(LOGIN_USER_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  })
  .addCase(REGISTER_USER_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(REGISTER_USER_SUCCESS, (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  })
  .addCase(REGISTER_USER_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  })
  .addCase(LOAD_USER_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(LOAD_USER_SUCCESS, (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  })
  .addCase(LOAD_USER_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  })
  .addCase(LOGOUT_USER_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(LOGOUT_USER_SUCCESS, (state) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  })
  .addCase(LOGOUT_USER_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  })
  .addCase(CLEAR_ERRORS, (state)=>{
    state.error = null;
  })
});

export const postofFollowingReducer = createReducer(initialState, (builder) => {
    builder
   .addCase(POST_FOLLOWING_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(POST_FOLLOWING_SUCCESS, (state, action) => {
    state.loading = false;
    state.posts = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(POST_FOLLOWING_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(CLEAR_ERRORS, (state)=>{
    state.error = null;
  })
});

export const allUsersReducer = createReducer(initialState, (builder) => {
    builder
   .addCase(ALL_USERS_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(ALL_USERS_SUCCESS, (state, action) => {
    state.loading = false;
    state.users = action.payload;
    //state.isAuthenticated = true;
  })
  .addCase(ALL_USERS_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    //state.isAuthenticated = false;
  })
  .addCase(CLEAR_ERRORS, (state)=>{
    state.error = null;
  })
});

export const userProfileReducer = createReducer(initialState, (builder) => {
  builder
 .addCase(USER_PROFILE_REQUEST, (state) => {
  state.loading = true;
})
.addCase(USER_PROFILE_SUCCESS, (state, action) => {
  state.loading = false;
  state.user = action.payload;
  //state.isAuthenticated = true;
})
.addCase(USER_PROFILE_FAILURE, (state, action) => {
  state.loading = false;
  state.error = action.payload;
  //state.isAuthenticated = false;
})
.addCase(CLEAR_ERRORS, (state)=>{
  state.error = null;
})
});
