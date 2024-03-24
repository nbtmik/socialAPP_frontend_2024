import axios from "axios";

//login User
export const loginUser = (email,password) => async (dispatch) => {
    try {
      dispatch({
        type: "LOGIN_USER_REQUEST",
      });
  
      const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
      let link = `${import.meta.env.VITE_SERVER}/api/v1/login`;
  
      const { data } = await axios.post(link,{email,password},config); 
  
      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

  //Load user if already logged in
  export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LOAD_USER_REQUEST",
      });
  
      let link = `${import.meta.env.VITE_SERVER}/api/v1/me`;
  
      const { data } = await axios.get(link,{withCredentials:true}); 
  
      dispatch({
        type: "LOAD_USER_SUCCESS",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LOAD_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

  export const getFollowingPosts=()=>async(dispatch)=>{
    try{
        dispatch({
            type:"POST_FOLLOWING_REQUEST",
        });

    let link = `${import.meta.env.VITE_SERVER}/api/v1/posts`;
  
      const { data } = await axios.get(link,{withCredentials:true}); 
      dispatch({
        type: "POST_FOLLOWING_SUCCESS",
        payload: data.posts,
      });

    }catch(error){
        dispatch({
            type: "POST_FOLLOWING_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  export const getAllUsers=(name="")=>async(dispatch)=>{
    try{
        dispatch({
            type:"ALL_USERS_REQUEST",
        });

    let link = `${import.meta.env.VITE_SERVER}/api/v1/users?name=${name}`;// for search
  
      const { data } = await axios.get(link,{withCredentials:true}); 
      dispatch({
        type: "ALL_USERS_SUCCESS",
        payload: data.users,
      });

    }catch(error){
        dispatch({
            type: "ALL_USERS_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  export const getMyPosts=()=>async(dispatch)=>{
    try{
        dispatch({
            type:"MY_POST_REQUEST",
        });

    let link = `${import.meta.env.VITE_SERVER}/api/v1/my/posts`;
  
      const { data } = await axios.get(link,{withCredentials:true}); 
      dispatch({
        type: "MY_POST_SUCCESS",
        payload: data.posts,
      });

    }catch(error){
        dispatch({
            type: "MY_POST_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  //logout User
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_USER_REQUEST",
    });

    //const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
    let link = `${import.meta.env.VITE_SERVER}/api/v1/logout`;

    await axios.get(link,{withCredentials:true});

    dispatch({
      type: "LOGOUT_USER_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

//Register new User
export const registerUser = (name,email,password,avatar) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_USER_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials: true};
    let link = `${import.meta.env.VITE_SERVER}/api/v1/register`;

    const { data } = await axios.post(link,{name,email,password,avatar},config); 

    dispatch({
      type: "REGISTER_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

//Update Profile
export const updateProfile = (name,email,avatar) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_PROFILE_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials: true};
    let link = `${import.meta.env.VITE_SERVER}/api/v1/update/profile`;

    const { data } = await axios.put(link,{name,email,avatar},config); 

    dispatch({
      type: "UPDATE_PROFILE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

//Update Password
export const updatePassword = (oldPassword,newPassword) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_PASSWORD_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials: true};
    let link = `${import.meta.env.VITE_SERVER}/api/v1/update/password`;

    const { data } = await axios.put(link,{oldPassword,newPassword},config); 

    dispatch({
      type: "UPDATE_PASSWORD_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PASSWORD_FAILURE",
      payload: error.response.data.message,
    });
  }
};

//delete Profile
export const deleteMyProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROFILE_REQUEST",
    });

    //const config = {headers:{"Content-Type":"application/json"},withCredentials: true};
    let link = `${import.meta.env.VITE_SERVER}/api/v1/delete/me`;

    const { data } = await axios.delete(link,{withCredentials: true}); 

    dispatch({
      type: "DELETE_PROFILE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROFILE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

//Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "FORGOT_PASSWORD_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},};
    let link = `${import.meta.env.VITE_SERVER}/api/v1/forgot/password`;

    const { data } = await axios.post(link,{email},config); 

    dispatch({
      type: "FORGOT_PASSWORD_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "FORGOT_PASSWORD_FAILURE",
      payload: error.response.data.message,
    });
  }
};

//Reset Password
export const resetPassword = (token,password) => async (dispatch) => {
  try {
    dispatch({
      type: "RESET_PASSWORD_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},};
    let link = `${import.meta.env.VITE_SERVER}/api/v1/password/reset/${token}`;

    const { data } = await axios.put(link,{password},config);

    dispatch({
      type: "RESET_PASSWORD_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "RESET_PASSWORD_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const getUserPosts=(id)=>async(dispatch)=>{
  try{
      dispatch({
          type:"USER_POST_REQUEST",
      });

  let link = `${import.meta.env.VITE_SERVER}/api/v1/userposts/${id}`;

    const { data } = await axios.get(link,{withCredentials:true}); 
    dispatch({
      type: "USER_POST_SUCCESS",
      payload: data.posts,
    });

  }catch(error){
      dispatch({
          type: "USER_POST_FAILURE",
          payload: error.response.data.message,
        });
  }
};

export const getUserProfile=(id)=>async(dispatch)=>{
  try{
      dispatch({
          type:"USER_PROFILE_REQUEST",
      });

  let link = `${import.meta.env.VITE_SERVER}/api/v1/user/${id}`;

    const { data } = await axios.get(link,{withCredentials:true}); 
    dispatch({
      type: "USER_PROFILE_SUCCESS",
      payload: data.user,
    });

  }catch(error){
      dispatch({
          type: "USER_PROFILE_FAILURE",
          payload: error.response.data.message,
        });
  }
};

export const followAndUnfollowUser=(id)=>async(dispatch)=>{
  try{
      dispatch({
          type:"FOLLOW_USER_REQUEST",
      });

  let link = `${import.meta.env.VITE_SERVER}/api/v1/follow/${id}`;

    const { data } = await axios.get(link,{withCredentials:true}); 
    dispatch({
      type: "FOLLOW_USER_SUCCESS",
      payload: data.message,
    });

  }catch(error){
      dispatch({
          type: "FOLLOW_USER_FAILURE",
          payload: error.response.data.message,
        });
  }
};