import React from "react";
import './css/Login.css';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import './css/Register.css';
import {login,reset} from './authorize/authSlice';
import Spinner from "./Spinner";

function Login(){
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  React.useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

    return (<form onSubmit={onSubmit}>
    <div id="LoginForm">
    <div class="Loginform">
    <div class="Logintitle">Welcome</div>
    <div class="Loginsubtitle">Let's create your account!</div>
    <div class="input-container ic1">
      <input id="email" class="inputLogin" type="email" name='email' value={email} onChange={onChange} placeholder="Email" required/>
      <div class="cut cut-short"></div>
    </div>
    <div class="input-container ic2">
      <input id="firstname" class="inputLogin" type="password" name='password' onChange={onChange} value={password} placeholder="Password" required />
      <div class="cut"></div>
    </div>
    <button type="submit" id="LoginSubmit">submit</button>
  </div>
  </div>
  </form>);
}

export default Login;