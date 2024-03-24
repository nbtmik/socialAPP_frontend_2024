import axios from "axios";

export const likePost=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:"LIKE_REQUEST",
        });

    let link = `${import.meta.env.VITE_SERVER}/api/v1/post/${id}`;
  
      const { data } = await axios.get(link,{withCredentials:true}); 
      dispatch({
        type: "LIKE_SUCCESS",
        payload: data.message,
      });

    }catch(error){
        dispatch({
            type: "LIKE_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  export const addCommentOnPost=(id,comment)=>async(dispatch)=>{
    try{
        dispatch({
            type:"COMMENT_REQUEST",
        });

        const config = {headers:{"Content-Type":"application/json"},withCredentials:true};

    let link = `${import.meta.env.VITE_SERVER}/api/v1/post/comment/${id}`;
  
      const { data } = await axios.put(link,{comment},config); 
      dispatch({
        type: "COMMENT_SUCCESS",
        payload: data.message,
      });

    }catch(error){
        dispatch({
            type: "COMMENT_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  export const deleteCommentOnPost=(id,commentId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"DELETE_COMMENT_REQUEST",
        });
    let link = `${import.meta.env.VITE_SERVER}/api/v1/post/comment/${id}`;

      const { data } = await axios.delete(link, {data: {commentId}, withCredentials: true}); // this is the unique one
      dispatch({
        type: "DELETE_COMMENT_SUCCESS",
        payload: data.message,
      });

    }catch(error){
        dispatch({
            type: "DELETE_COMMENT_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  export const createNewPost=(caption,image)=>async(dispatch)=>{
    try{
        dispatch({
            type:"NEW_POST_REQUEST",
        });
        const config = {headers:{"Content-Type":"application/json"},withCredentials:true};

    let link = `${import.meta.env.VITE_SERVER}/api/v1/post/upload`;

      const { data } = await axios.post(link, {caption,image},config);
      dispatch({
        type: "NEW_POST_SUCCESS",
        payload: data.message,
      });

    }catch(error){
        dispatch({
            type: "NEW_POST_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  export const UpdatePost=(caption,id)=>async(dispatch)=>{
    try{
        dispatch({
            type:"UPDATE_POST_REQUEST",
        });
        const config = {headers:{"Content-Type":"application/json"},withCredentials:true};

    let link = `${import.meta.env.VITE_SERVER}/api/v1/post/${id}`;

      const { data } = await axios.put(link, {caption},config);
      dispatch({
        type: "UPDATE_POST_SUCCESS",
        payload: data.message,
      });

    }catch(error){
        dispatch({
            type: "UPDATE_POST_FAILURE",
            payload: error.response.data.message,
          });
    }
  };

  export const deletePost=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:"DELETE_POST_REQUEST",
        });
        //const config = {headers:{"Content-Type":"application/json"},withCredentials:true};

    let link = `${import.meta.env.VITE_SERVER}/api/v1/post/${id}`;

      const { data } = await axios.delete(link, {withCredentials: true} );
      dispatch({
        type: "DELETE_POST_SUCCESS",
        payload: data.message,
      });

    }catch(error){
        dispatch({
            type: "DELETE_POST_FAILURE",
            payload: error.response.data.message,
          });
    }
  };