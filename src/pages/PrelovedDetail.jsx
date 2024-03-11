import { Icon } from '@iconify/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const PrelovedDetail = () => {
  return (
    <div className="bg-Primary-LightBlue">
     
      <main className="w-full p-4 font-Poppins">
        <div className='border border-Outline-gray p-5 rounded-2xl'>
            <Splide
            options={{
                gap:10,
                arrows:false,
                autoplay:true
            }}

            >
                <SplideSlide>
                    <img src="https://source.unsplash.com/random/900x700/?book" className='w-full mb-10 aspect-square object-cover rounded-lg' alt="image" loading='lazy' />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://source.unsplash.com/random/900x700/?books" className='w-full mb-10 aspect-square object-cover rounded-lg' alt="image" loading='lazy' />
                </SplideSlide>
            </Splide>
            <h3 className='mt-4 text-base font-semibold'>Buku Algoritma dan Struktur Data</h3>
            <p className='text-xl font-medium px-4 bg-Secondary-LightTeal inline-block rounded-2xl mt-4'>Rp 89.000</p>
            <p className='text-sm mt-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <button className='btn w-full mt-4 bg-Primary-Blue text-Primary-White hover:bg-Primary-Purple duration-300 ease-in-out'>Beli Sekarang <Icon icon='mingcute:whatsapp-line'/></button>
        </div>
    
      </main>
 
    </div>
  )
}

export default PrelovedDetail