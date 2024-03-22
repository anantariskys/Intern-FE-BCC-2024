import { Icon } from '@iconify/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getKomunitasById } from '../api/services/komunitas';
import CardDetail from '../components/CardDetail'

const dummy = {
    nama: "Jasa Sablon Kaos Murah",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    photo: ["https://source.unsplash.com/random/900x700/?shirt", "https://source.unsplash.com/random/900x700/?redShirt"],
    kategori: "Penawaran Jasa",
  };

const KomunitasDetail = () => {
  const {id} = useParams() 
  const [data,setData] = useState([])



  useEffect(()=>{
    const fetchData =async()=>{
      try {
        const response = await getKomunitasById(id)
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
     
    <main className="w-full p-4  md:px-56 md:py-28 font-Poppins">
     
      <CardDetail desc={data.description} nama={data.title} link={data.linkWebsite}  kategori={data.category} photo={dummy.photo} userId={data.idUser}/>
  
    </main>

  </div>
  )
}

export default KomunitasDetail