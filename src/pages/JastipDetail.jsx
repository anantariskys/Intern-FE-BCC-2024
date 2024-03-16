import { Icon } from '@iconify/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import CardDetail from '../components/CardDetail';



const dummy = {
  nama: "Mochi Segala Rasa",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  photo: ["https://source.unsplash.com/random/900x700/?shirt", "https://source.unsplash.com/random/900x700/?redShirt"],
  kategori: "Barang",
  price : "Rp25.000/porsi",
  open : "Minggu - Senin",
  closeOrder : "21.00"
};


const JastipDetail = () => {
  return (
    <div className="bg-Primary-LightBlue">
     
    <main className="w-full p-4 font-Poppins">
     
      <CardDetail closeOrder={dummy.closeOrder} desc={dummy.desc} kategori={dummy.kategori} open={dummy.open} price={dummy.price}nama={dummy.nama} photo={dummy.photo} />
  
    </main>

  </div>
  )
}

export default JastipDetail