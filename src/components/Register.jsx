import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import './css/Register.css';
import {register,reset} from './authorize/authSlice';
import Spinner from "./Spinner";

function Register(){
    const [formData,setFormData]=React.useState({
      name:'',
      email:'',
      password:'',
      password2:''
    })
    const {name,email,password,password2}=formData;

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth);
    React.useEffect(()=>{
      if(isError){
        toast.error(message)
      }
      if(isSuccess||user){
        navigate('/')
      }

      dispatch(reset());

    },[user,isError,isSuccess,message,navigate,dispatch])

    const onChange= (e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    }
    const onSubmit=(e)=>{
      e.preventDefault()
      if(password!==password2){
        toast.error('Passwords do not match')
      }
      else{
        const userData={
          name,email,password,
        }

        dispatch(register(userData));
      }
    }

    if(isLoading){
      return <Spinner />
    }
    return (
    <form onSubmit={onSubmit}>
    <div id="RegisterForm">
    <div class="Registerform">
    <div class="Registertitle">Welcome</div>
    <div class="Registersubtitle">Let's create your account!</div>
    <div class="input-container ic1">
      <input id="name" class="inputRegister" type="text" name='name' value={name} onChange={onChange} placeholder="Name" required/>
      <div class="cut cut-short"></div>
    </div>
    <div class="input-container ic2">
      <input id="email" class="inputRegister" type="email" name='email' value={email}  onChange={onChange} placeholder="Email" required/>
      <div class="cut cut-short"></div>
    </div>
    <div class="input-container ic2">
      <input id="password" class="inputRegister" type="password" name='password' value={password} onChange={onChange} placeholder="Password" required />
      <div class="cut"></div>
    </div>
    <div class="input-container ic2">
      <input id="password2" class="inputRegister" type="password" name='password2' value={password2} onChange={onChange} placeholder="Re-Password" required />
      <div class="cut"></div>
    </div>
    <button type="submit" id="RegisterSubmit">submit</button>
  </div>
  </div>
  </form>     
  );
}

export default Register;
