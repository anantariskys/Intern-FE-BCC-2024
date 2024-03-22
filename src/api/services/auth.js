
import axios from "axios";
import coreApi from "../coreApi";



const login =async(form)=>{
    try {
        const response = await coreApi.post('v1/login',form)
        window.localStorage.setItem('token',response.data.data.token)
      } catch (error) {
        console.log(error)
        throw(error)
      }
}

const register =async(form)=>{
    try {
        const response = await coreApi.post('v1/register',form)
        console.log(response) 
      } catch (error) {
        console.log(error)
        throw error
      }
}



const getProfile =async()=>{
    try {
        const token = localStorage.getItem('token'); 
        const response = await coreApi.get('v1/login-user', {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });
        return response.data.data
      } catch (error) {
        throw error
      }
}
const updateProfile =async(id,form)=>{
    try {
        
        const response = await axios.patch(`https://braw-mager-d9515b823a62.herokuapp.com/user/updatedata/${id}`,form);
        console.log(response)
        return response
  
      } catch (error) {
        throw error
      }
}

const getUserDataByUserId = async(id)=>{
  try {
    const response = await axios.get(`https://braw-mager-d9515b823a62.herokuapp.com/user/readuserdatabyuserid/${id}`);
    return response.data

  } catch (error) {
    throw error
  }
}
export {login,register,getProfile,updateProfile,getUserDataByUserId}