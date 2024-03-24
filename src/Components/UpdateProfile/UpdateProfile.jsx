import React, { useEffect, useState } from "react";
import "./UpdateProfile.css";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, registerUser, updateProfile } from "../../Actions/User";
import { useAlert } from "react-alert";
import Loader from "../Loader/Loader";

const UpdateProfile=()=>{

    const {loading, error,user} = useSelector((state)=>state.user);
    const {loading:updateLoading, error:updateError,message,} = useSelector((state)=>state.like);

    const[name, setName] = useState(user.name);
    const[email, setEmail] = useState(user.email);
    const[avatar, setAvatar] = useState("");
    const[avatarPrev, setAvatarPrev] = useState(user.avatar.url);

    const dispatch = useDispatch();
    const alert = useAlert();

    const handleImageChange=(e)=>{
        const file= e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        
        Reader.onload=()=>{
            if(Reader.readyState===2){
                setAvatarPrev(Reader.result);
                setAvatar(Reader.result);
            }
        };
    };

    const submitHandler =async(e)=>{
        e.preventDefault();
        await dispatch(updateProfile(name,email,avatar));
        dispatch(loadUser());
    };

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch({type:'CLEAR_ERRORS'});
        }
        if(updateError){
            alert.error(updateError);
            dispatch({type:'CLEAR_ERRORS'});
        }
        if(message){
            alert.success(message);
            dispatch({type:'CLEAR_MESSAGE'});
        }
    },[dispatch,error,alert,updateError,message]);


    return(
        loading?<Loader /> : (
            <div className="updateProfile">
            <form className="updateProfileForm" onSubmit={submitHandler}>

            <Typography variant="h3" style={{padding:"2vmax"}}>Social AAP</Typography>
            <Avatar src={avatarPrev} alt="User" sx={{height:"10vmax", width:"10vmax" }} />
            <input type="file" accept="image/*" onChange={handleImageChange}></input>
            <input className="updateProfileInputs" type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)} />
            <input className="updateProfileInputs" type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />


            <Button disabled={updateLoading} type="submit">UPDATE</Button>
            </form>
        </div>
        )
    );
};


export default UpdateProfile;