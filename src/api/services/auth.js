
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
        console.log(error);
        throw error
      }
}
export {login,register,getProfile}