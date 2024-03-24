import React, { useEffect, useState } from "react";
import "./ResetPassword.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Link, useNavigate , useParams } from 'react-router-dom';
import { resetPassword } from "../../Actions/User";

const ResetPassword =()=>{

    const[newPassword,setNewPassword] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();
    //const navigate = useNavigate();
    const params = useParams() //here to make global variable

    const{error,loading,message} = useSelector((state)=>state.like);

    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(resetPassword(params.token,newPassword));
    };

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch({type:"CLEAR_ERRORS"});
        }
        if(message){
            alert.success(message);
            dispatch({type:"CLEAR_MESSAGE"});
        }
    },[alert,error,message,dispatch]);

    return(
        <div className="resetPassword">
            <form className="resetPasswordForm" onSubmit={submitHandler}>
            <Typography variant="h3" style={{padding:"2vmax"}}>Social AAP</Typography>
                <input className="resetPasswordInputs" type="password" placeholder="New Password" required value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
                
                <Link to="/">
                    <Typography>Login</Typography>
                </Link>
                <Typography>Or</Typography>

                <Link to="/forgot/password">
                    <Typography>Request Another Token!</Typography>
                </Link>
                <Button disabled={loading} type="submit">Reset Password</Button>
            </form>
        </div>
    )
}

export default ResetPassword;