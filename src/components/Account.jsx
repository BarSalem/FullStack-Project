import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updatePass,reset } from "./authorize/authSlice";
import {toast} from 'react-toastify';
import "./css/Account.css";

function Profile(){
    const [edit,setEdit]=React.useState(true)
    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth);
    const [formData,setFormData]=React.useState({
      email:user.email,
      password:'',
      password2:''
    })
    const {email,password,password2}=formData;
    /*const navigate=useNavigate();
    const dispatch=useDispatch()*/
    
    /*React.useEffect(()=>{
      if(isError){
        toast.error(message)
      }
      if(isSuccess||user){
        navigate('/')
      }

      dispatch(reset());

    },[user,isError,isSuccess,message,navigate,dispatch])
*/
    const onChange= (e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    }
    /*const onSubmit=(e)=>{
      e.preventDefault()
      const userData={
      email,password
    }
    dispatch(updatePass(userData))
    }*/
    return (<div><center>
    <h1 id="editH1">This is your Account info {user.name}</h1>
    <p className="editP">You can change your password by clicking on the edit button</p>
    <p className="editP">Your Email : {user.email}</p>
    <p className="editP">password is unvisible</p>
    {edit ? <> <form autoComplete="new-password" onSubmit={onSubmit}>
      <label>Email:</label>
      <input  class="inputRegister inputEdit" readonly type="email" name='email' value={user.email} onChange={onChange} placeholder="Email" required/>
      <label>New Password:</label>
    <input class="inputRegister inputEdit" type="password" name='password' value={password} onChange={onChange} placeholder="Password" autoComplete="none" required />
    <br /><label>Repeat Password:</label>
    <input class="inputRegister inputEdit" type="password" name='password2' value={password2} onChange={onChange} placeholder="Password" autoComplete="none" required />
    <br />
    <div className="editBut">
    <button type="submit" className="setButton">Save</button>
    </div>
    </form></>: null}
    <div className="editBut">
    <button onClick={()=>setEdit(!edit)} className="setButton editBut">Edit</button>
    </div>
    <div className="row">
      <div className="col-md-7 col-sm-12">
      <h6>text</h6>
      <h1>111</h1>
      </div>
      <div className="col-md-5 col-sm-12"></div>
    </div>
    </center>
    </div>);
}

export default Profile;