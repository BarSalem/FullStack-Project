import React from "react";
import {useSelector} from 'react-redux';
import "./css/Account.css";

function Profile(){
    const [edit,setEdit]=React.useState(true)
    const { user } = useSelector((state) => state.auth)
    const [formData,setFormData]=React.useState({
      password:'',
      password2:''
    })
    const {password,password2}=formData;
    const onChange= (e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    }
    /*const onSubmit=(e)=>{
      e.preventDefault()
      if(password!==password2){
        toast.error('Passwords do not match')
      }
      else{
        user
        dispatch(register(userData));
      }
    }*/
    return (<div>
    <h1>Your Account info</h1>
    <p>Name : {user.name} </p>
    <p>Email : {user.email}</p>
    <p>password is hashed</p>
    {edit ? <p>hi</p>:<p>hello</p>}
    <label>New Password:</label>
    <input class="inputRegister" type="password" name='password' value={password} onChange={onChange} placeholder="Password" required />
    <label>Repeat Password:</label>
    <input class="inputRegister" type="password" name='password2' value={password2} onChange={onChange} placeholder="Password" required />
    <button onClick={()=>setEdit(!edit)} className="setButton">Edit</button>
    </div>);
}

export default Profile;