import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJastipById } from '../api/services/jastip';
import CardDetail from '../components/CardDetail';



const dummy = {
  photo: ["https://source.unsplash.com/random/900x700/", "https://source.unsplash.com/random/900x800/"],

};




const JastipDetail = () => {
  const {id} = useParams() 
  const [data,setData] = useState([])



  useEffect(()=>{
    const fetchData =async()=>{
      try {
        const response = await getJastipById(id)
        console.log(response)
        setData(response)
        
      } catch (error) {
       console.log(error) 
      }
    }
    fetchData()
  },[id])

  return (
    <div className="bg-Primary-LightBlue">
     
    <main className="w-full p-4 md:px-56 font-Poppins">
     
      <CardDetail userId={data.idUser} closeOrder={data.closeOrder} desc={dummy.desc} kategori={data.category} open={data.openDay} price={data.price}nama={data.title} photo={dummy.photo} />
  
    </main>

  </div>
  )
}

export default JastipDetail