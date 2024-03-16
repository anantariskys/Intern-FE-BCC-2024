import { Icon } from '@iconify/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import CardDetail from '../components/CardDetail'

const dummy = {
    nama: "Jasa Sablon Kaos Murah",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    photo: ["https://source.unsplash.com/random/900x700/?shirt", "https://source.unsplash.com/random/900x700/?redShirt"],
    kategori: "Penawaran Jasa",
  };

const KomunitasDetail = () => {
  return (
    <div className="bg-Primary-LightBlue">
     
    <main className="w-full p-4 font-Poppins">
     
      <CardDetail desc={dummy.desc} nama={dummy.nama} kategori={dummy.kategori} photo={dummy.photo} userFullName={"Muhammad Dahlan"}/>
  
    </main>

  </div>
  )
}

export default KomunitasDetail