import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Icon } from "@iconify/react";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const dummy = [
  {
    name: "Sepatu Vans Old Skool Rain Drum/True White",
    price: "Rp 849.000",
    kondisi: "90%",
    image: "https://source.unsplash.com/random/900×700/?sneakers",
  },
  {
    name: "Kemeja Pria Slim Fit",
    price: "Rp 249.000",
    kondisi: "95%",
    image: "https://source.unsplash.com/random/900x700/?shirt",
  },
  {
    name: "Tas Ransel Laptop",
    price: "Rp 399.000",
    kondisi: "99%",
    image: "https://source.unsplash.com/random/900x700/?bag",
  },
  {
    name: "Jam Tangan Sport Digital",
    price: "Rp 179.000",
    kondisi: "85%",
    image: "https://source.unsplash.com/random/900x700/?watch",
  },
  {
    name: "Celana Panjang Chino",
    price: "Rp 299.000",
    kondisi: "70%",
    image: "https://source.unsplash.com/random/900x700/?pants",
  },
  {
    name: "Topi Baseball Casual",
    price: "Rp 99.000",
    kondisi: "89%",
    image: "https://source.unsplash.com/random/900x700/?cap",
  },
];

const dumm1 = [
  {
    name: "Skin Care & Sunscreen Wardah",
    price: "Rp 41.000/pcs",
    closeOrder: "Close order -",
    image: "https://source.unsplash.com/random/900x700/?skincare",
  },
  {
    name: "Mochi Segala Rasa",
    price: "Rp 25.000/pax",
    closeOrder: "Close order 21.00",
    image: "https://source.unsplash.com/random/900x700/?mochi",
  },
  {
    name: "Titip Print Makalah",
    price: "Rp 5.000/pcs",
    closeOrder: "Close order 21.00",
    image: "https://source.unsplash.com/random/900x700/?paper",
  },
];

const dummy2 = [
  {
    name: "Jasa Design Kaos dan Spanduk Jasa Design Kaos dan Spanduk",
    price: "Harga disesuaikan",
  },
  {
    name: "Jasa Edit Video Professional",
    price: "Rp 15.000/jam",
  },
  {
    name: "Jasa Pembuatan Web",
    price: "Rp 30.000/jam",
  },
];

const Home = () => {
  return (
    <div className="bg-Primary-LightBlue">

      <main className="w-full">
        <section className="px-4 font-Poppins pt-8 mb-8">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-base font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 px-3 rounded-2xl">😍 Barang Preloved terfavorit</h2>
            <Link to={'/preloved'}><p className="text-xs text-Primary-Blue text-center hover:underline underline-offset-1">Selengkapnya</p></Link>
          </div>
          <Splide
            options={{
              arrows: false,
              focus: "center",
              gap: 10,
              autoHeight: true,
              autoplay: true,
            }}
          >
            {dummy.map((item, index) => (
              <SplideSlide key={index}>
                <div className="w-full duration-100 ease-in-out flex p-4 bg-gradient-to-r mb-10 gap-4 from-Primary-Purple font-Poppins to-Primary-Blue rounded-2xl">
                  <img src={item.image} alt="card-image" loading="lazy" draggable="false" className="h-28 object-cover aspect-square rounded-xl" />
                  <div className="flex flex-col justify-between">
                    <h1 className="text-base text-Primary-LightBlue font-medium">{item.name}</h1>
                    <div className="">
                      <div className="text-xs inline-block text-Primary-Blue bg-Primary-LightBlue px-3 py-px   rounded-2xl text-center font-semibold">{item.price}</div>
                      <p className="text-base text-Primary-LightBlue font-medium">⭐ Kondisi {item.kondisi}</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </section>
        <section className="px-4 font-Poppins ">
          <h2 className="text-base font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 mb-4 inline-block px-3 rounded-2xl">😎 Fitur Kami</h2>
          <div className="flex justify-between gap-6">
            <Link className="w-1/5" to={'/preloved'}>
            
              <div className="w-full flex justify-center items-center aspect-square rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="mdi:shopping" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Temu Preloved</p>
          
            </Link>
            <Link className="w-1/5" to={"/jastip"}>
        
              <div className="w-full flex justify-center items-center aspect-square rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="mdi:shopping" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Jastip</p>
          
            </Link>
            <Link className="w-1/5" to={'/antarJemput'}>
           
              <div className="w-full flex justify-center items-center aspect-square rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="mdi:shopping" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Antar Jemput</p>
         
            </Link>
            <Link className="w-1/5" to={'/komunitas'}>
           
              <div className="w-full flex justify-center items-center aspect-square rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="mdi:shopping" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Komunitas BRAW!</p>
          
            </Link>
          </div>
        </section>
        <section className="px-4 font-Poppins mt-8 mb-8">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-base font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 px-3 rounded-2xl">😉 Mau nitip apa hari ini?</h2>
            <Link to={'/jastip'}>
            <p className="text-xs text-Primary-Blue text-center hover:underline underline-offset-1">Selengkapnya</p>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {dumm1.map((item, index) => (
              <div key={index} className="rounded-2xl w-full flex justify-between hover:bg-Primary-White duration-300 ease-in-out hover:shadow-xl p-3 gap-2  border border-Outline-gray">
                <img src={item.image} draggable="false" loading="lazy" alt="card-image" className="h-28 object-cover aspect-square rounded-xl" />
                <div className="flex-col flex justify-between ">
                  <div className="">
                    <h3 className="text-sm font-semibold text-Text-Black mb-2">{item.name}</h3>
                    <p className="inline-block font-medium text-xs px-3 py-px bg-Secondary-LightTeal text-Text-Black rounded-2xl">{item.price}</p>
                  </div>
                  <div className="flex justify-between items-end gap-2">
                    <p className="text-xs font-normal text-Text-Black">{item.closeOrder}</p>
                    <button className="text-[0.625rem] btn btn-xs hover:bg-Primary-Purple ease-in-out duration-200 border-0  bg-Primary-Blue text-Primary-White">
                      Selengkapnya
                      <span>
                        <Icon icon="ooui:next-ltr" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 font-Poppins mt-8 mb-8">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-base font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 px-3 rounded-2xl">🤩 Temukan jasa di BRAW!</h2>
            <p className="text-xs text-Primary-Blue text-center hover:underline underline-offset-1">Selengkapnya</p>
          </div>
          <div className="flex flex-col gap-4">
            {dummy2.map((item, index) => (
              <div key={index} className="rounded-2xl w-full flex  hover:bg-Primary-White duration-300 ease-in-out hover:shadow-xl p-3 gap-2 border border-Outline-gray">
                <div className="w-16 flex justify-center items-center  aspect-square rounded-lg bg-Primary-Blue">
                  <Icon icon="fa6-solid:handshake" className="text-Primary-LightBlue text-2xl" />
                </div>
                <div className="flex flex-col justify-center gap-5 w-3/4">
                  <h3 className="text-base font-semibold text-Text-Black line-clamp-1">{item.name}</h3>
                  <div className="flex  w-full  justify-between">
                    <p className="font-medium text-xs px-3 py-px flex text-Text-Black  justify-center items-center bg-Secondary-LightTeal rounded-2xl">{item.price}</p>
                    <button className="text-[0.625rem] btn btn-xs hover:bg-Primary-Purple ease-in-out border-0 duration-200  bg-Primary-Blue text-Primary-White">
                      Selengkapnya
                      <span>
                        <Icon icon="ooui:next-ltr" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full bg-Primary-Purple py-9 font-Poppins flex flex-col items-center rounded-t-3xl gap-8">
          <p className="w-1/5 rounded-full aspect-square bg-[#FFFDE3] flex justify-center items-center text-4xl bg-opacity-50">🙆‍♀️</p>
          <p className="text-sm font-normal text-Primary-White w-3/5 text-center">kunjungi halaman komunitas dan tingkatkan engagement bisnis dan jasamu!</p>
          <button className="px-4 py-2 btn text-base bg-Primary-White border-0 hover:bg-Secondary-LightTeal duration-300 ease-in-out active:bg-Secondary-LightTeal text-Primary-Blue">Jelajahi Komunitas BRAW!</button>
        </section>
      </main>

    </div>
  );
};

export default Home;
