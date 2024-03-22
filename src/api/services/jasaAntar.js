
import coreApi from "../coreApi";



const getAllJasaAntar = async () => {
  try {
    const response = await coreApi.get('/getalljasantar');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getJasaAntarByUserId = async (id) => {
    try {
        const response = await coreApi.get(`/readjasantarbyuserid/${id}`)
        return(response.data.data)
      } catch (error) {
        throw error
      }
};

const getJasaAntarById = async (id) => {
    try {
        const response = await coreApi.get(`/readjasantar/${id}`)
        console.log(response.data.data)
        return(response.data.data)
      } catch (error) {
        console.log(error);
        throw error
      }
};

const createJasaAntar = async (form) => {
    try {
        const response = await coreApi.post("/jasantar", form);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        throw error
      }
};


const deleteJasaAntar = async(id)=>{
  try {       
     const token = localStorage.getItem('token'); 
    const response = await coreApi.delete(`/deljasantar/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    console.log(response.data)
    
  } catch (error) {
    throw error    
  }
}




export { getAllJasaAntar,getJasaAntarById,createJasaAntar,deleteJasaAntar ,getJasaAntarByUserId};
