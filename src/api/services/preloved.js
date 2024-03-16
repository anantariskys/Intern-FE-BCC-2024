
import coreApi from "../coreApi";



const getAllPreloved = async () => {
  try {
    const response = await coreApi.get('/getallpreloved');
    console.log(response.data);
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

const createPreloved = async (form) => {
    try {
        const response = await coreApi.post("/preloved", form);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        throw error
      }
};




export { getAllPreloved,getPrelovedById,createPreloved };
