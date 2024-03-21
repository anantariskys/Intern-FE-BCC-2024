
import coreApi from "../coreApi";



const getAllPreloved = async () => {
  try {
    const response = await coreApi.get('/getallpreloved');

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getPrelovedById = async (id) => {
    try {
        const response = await coreApi.get(`/readpreloved/${id}`)
        console.log(response.data.data)
        return(response.data.data)
      } catch (error) {
        console.log(error);
        throw error
      }
};
const getPrelovedByUserId = async (id) => {
    try {
        const response = await coreApi.get(`/readprelovedbyuserid/${id}`)
        return(response.data.data)
      } catch (error) {
        throw error
      }
};

const createPreloved = async (form) => {
    try {
        const response = await coreApi.post("/preloved", form);
      
      } catch (error) {
        console.log(error);
        throw error
      }
};


const deletePreloved = async(id)=>{
  try {       
     const token = localStorage.getItem('token'); 
    const response = await coreApi.delete(`/delpreloved/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    console.log(response.data)
    
  } catch (error) {
    throw error    
  }
}




export { getAllPreloved,getPrelovedById,createPreloved,deletePreloved,getPrelovedByUserId };
