import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updatePass,reset } from "./authorize/authSlice";
import {toast} from 'react-toastify';
import "./css/Account.css";

function Profile(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth);
    useEffect(()=>{
      if(isError||!user){
        console.log(message);
        navigate('/login')
      }
      if(isSuccess||user){
        console.log("Good");
      }
    },[user,isError,isSuccess,navigate])
    const [edit,setEdit]=React.useState(false)
    const email=user.email;
    const [formData,setFormData]=React.useState({
      passworda:'',
      password2:'',
      Nname:user.name
    })
    const {passworda,password2,Nname}=formData;
    const onChange= (e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    }
    const onSubmit=(e)=>{
      e.preventDefault()
      if(passworda!==password2){
        toast.error('Passwords do not match')
      }
      else{
        const userData={
          email,passworda,Nname
        }
        setEdit(!edit)
        dispatch(updatePass(userData))
        navigate('/')
      }
    }
    return (<div><center>
    <h1 id="editH1">This is your Account info {user.name}</h1>
    <p className="editP">You can change your password by clicking on the edit button</p>
    <p className="editP">Your Email : {user.email}</p>
    <p className="editP">Your Name: {user.name}</p>
    <p className="editP">Your Password is unvisible but you can edit it by clicking the "Edit" button below</p>
    <button onClick={()=>setEdit(!edit)} className="setButton editBut">Edit</button>
    {edit ? <> <form autoComplete="new-password" onSubmit={onSubmit}>
      <br/><label>Name:</label>
      <input  class="inputRegister inputEdit" type="text" name='Nname' value={Nname} onChange={onChange} placeholder="Name" required/>
      <br/><label>New Password:</label>
    <input class="inputRegister inputEdit" type="password" name='passworda' value={passworda} onChange={onChange} placeholder="Password" autoComplete="none" required />
    <br /><label>Repeat Password:</label>
    <input class="inputRegister inputEdit" type="password" name='password2' value={password2} onChange={onChange} placeholder="Repeat-Password" autoComplete="none" required />
    <br />
    <div className="editBut">
    <button type="submit" className="setButton">Save</button>
    </div>
    </form></>: null}
    <div className="editBut">
    </div>
    </center>
    </div>);
}

export default Profile;