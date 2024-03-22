
import coreApi from "../coreApi";



const getAllJastip = async () => {
  try {
    const response = await coreApi.get('/getalljastip');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getJastipByUserId = async (id) => {
    try {
        const response = await coreApi.get(`/readjastipbyuserid/${id}`)
        return(response.data.data)
      } catch (error) {
        throw error
      }
};
const getJastipById = async (id) => {
    try {
        const response = await coreApi.get(`/readjastip/${id}`)
        console.log(response.data.data)
        return(response.data.data)
      } catch (error) {
        console.log(error);
        throw error
      }
};

const createJastip = async (form) => {
    try {
        const response = await coreApi.post("/jastip", form);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        throw error
      }
};


const deleteJastip = async(id)=>{
  try {       
     const token = localStorage.getItem('token'); 
    const response = await coreApi.delete(`/deljastip/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    console.log(response.data)
    
  } catch (error) {
    throw error    
  }
}




export { getAllJastip,getJastipById,createJastip,deleteJastip ,getJastipByUserId};
