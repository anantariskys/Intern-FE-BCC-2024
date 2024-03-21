
import coreApi from "../coreApi";



const getAllKomunitas = async () => {
  try {
    const response = await coreApi.get('/getallkomunitasbraw');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getKomunitasById = async (id) => {
    try {
        const response = await coreApi.get(`/readkomunitasbraw/${id}`)
        console.log(response.data.data)
        return(response.data.data)
      } catch (error) {
        console.log(error);
        throw error
      }
};

const createKomunitas = async (form) => {
    try {
        const response = await coreApi.post("/komunitasbraw", form);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        throw error
      }
};


const deleteKomunitas = async(id)=>{
  try {       
     const token = localStorage.getItem('token'); 
    const response = await coreApi.delete(`/delkomunitasbraw/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    console.log(response.data)
    
  } catch (error) {
    throw error    
  }
}




export { getAllKomunitas,getKomunitasById,createKomunitas,deleteKomunitas};
