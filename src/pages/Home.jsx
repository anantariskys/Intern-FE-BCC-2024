import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Icon } from "@iconify/react";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Preloved from "../components/section/Preloved";
import Jastip from "../components/section/Jastip";
import Komunitas from "../components/section/Komunitas";

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
        <Preloved/>
        <section className="px-4 md:px-24 font-Poppins ">
          <h2 className="text-base  lg:text-xl font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 mb-4 inline-block px-3 rounded-2xl">😎 Fitur Kami</h2>
          <div className="flex justify-between gap-6">
            <Link className="w-1/5 lg:w-full" to={"/preloved"}>
              <div className="w-full flex justify-center items-center aspect-square lg:aspect-[16/4] rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="mdi:shopping" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Temu Preloved</p>
            </Link>
            <Link className="w-1/5 lg:w-full" to={"/jastip"}>
              <div className="w-full flex justify-center items-center aspect-square lg:aspect-[16/4] rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="material-symbols:box-outline" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Jastip</p>
            </Link>
            <Link className="w-1/5 lg:w-full" to={"/antarJemput"}>
              <div className="w-full flex justify-center items-center aspect-square lg:aspect-[16/4] rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="ph:motorcycle-bold" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Antar Jemput</p>
            </Link>
            <Link className="w-1/5 lg:w-full" to={"/komunitas"}>
              <div className="w-full flex justify-center items-center aspect-square lg:aspect-[16/4] rounded-lg bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out">
                <Icon icon="fluent:people-community-16-filled" className="text-Primary-LightBlue text-2xl" />
              </div>
              <p className="text-xs font-medium text-Text-Black text-center mt-1">Komunitas BRAW!</p>
            </Link>
          </div>
        </section>
        <Jastip/>
        <Komunitas/>
    
      
     
        <section className="w-full bg-Primary-Purple py-9 md:py-32 font-Poppins flex flex-col md:flex-row items-center md:justify-center rounded-t-3xl gap-8 md:gap-12">
          <p className="w-1/5 md:w-24 rounded-full aspect-square bg-[#FFFDE3] flex justify-center items-center text-4xl bg-opacity-50">🙆‍♀️</p>
          <div className="flex flex-col    items-center md:items-baseline justify-center">
            <p className="text-sm md:text-lg font-normal text-Primary-White w-3/5 md:text-left mb-8 text-center">Kunjungi halaman komunitas dan tingkatkan engagement bisnis dan jasamu!</p>
            <div>
              <button className="px-4 py-2 btn text-base inline-block bg-Primary-White border-0 hover:bg-Secondary-LightTeal duration-300 ease-in-out active:bg-Secondary-LightTeal text-Primary-Blue">Jelajahi Komunitas BRAW!</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
