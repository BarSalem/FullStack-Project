import axios from 'axios';

const API_URL='/user'

const register=async (userData)=>{
    const response=await axios.post(API_URL,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }

    return response.data;
}

const login=async (userData)=>{
    const response=await axios.post(API_URL+'/login',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }

    return response.data;
}

const updatePass=async (userData)=>{
    const response=await axios.post("/acc",userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }

    return response.data;
}

const verifyUser =async (code) => {
    return axios.get("/confirm/" + code).then((response) => {
      return response.data;
    });
  };

const logout= ()=>{
    localStorage.removeItem('user');
}

const authService={
    register,
    logout,
    login,
    updatePass,
    verifyUser
}

export default authService;