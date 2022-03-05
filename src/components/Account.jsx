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
    return (<div><center>
    <h1 id="editH1">This is your Account info {user.name}</h1>
    <p className="editP">You can change your password by clicking on the edit button</p>
    <p className="editP">Your Email : {user.email}</p>
    <p className="editP">password is unvisible</p>
    {edit ? <> <form autoComplete="new-password">
      <label>New Password:</label>
    <input class="inputRegister inputEdit" type="password" name='password' value={password} onChange={onChange} placeholder="Password" autoComplete="none" required />
    <br /><label>Repeat Password:</label>
    <input class="inputRegister inputEdit" type="password" name='password2' value={password2} onChange={onChange} placeholder="Password" autoComplete="none" required />
    <br /><button type="submit" className="setButton">Save</button>
    </form></>: null}
    <button onClick={()=>setEdit(!edit)} className="setButton">Edit</button>
    </center>
    </div>);
}

export default Profile;