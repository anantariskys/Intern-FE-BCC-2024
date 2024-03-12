import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const prelove = [
    {
      id: 1,
      nama: "Buku Algoritma dan Struktur Data",
      kategori: "Pendidikan",
      image: "https://source.unsplash.com/random/900x700/?book",
      kondisi: "90%",
      countdown: 10,
      price: "Rp 89.000",
    },
    {
      id: 2,
      nama: "Buku Algoritma dan Struktur Data",
      kategori: "Gadget",
      image: "https://source.unsplash.com/random/900x700/?macbook",
      kondisi: "95%",
      countdown: 3,
      price: "Rp 13.399.000",
    },
    {
      id: 3,
      nama: "Buku Pemrograman Python",
      kategori: "Pendidikan",
      image: "https://source.unsplash.com/random/900x700/?python",
      kondisi: "80%",
      countdown: 5,
      price: "Rp 120.000",
    },
    {
      id: 4,
      nama: "Smartphone Samsung Galaxy S20",
      kategori: "Gadget",
      image: "https://source.unsplash.com/random/900x700/?samsung",
      kondisi: "85%",
      countdown: 7,
      price: "Rp 7.500.000",
    },
    {
      id: 5,
      nama: "Keyboard Mechanical Gaming",
      kategori: "Gadget",
      image: "https://source.unsplash.com/random/900x700/?keyboard",
      kondisi: "98%",
      countdown: 1,
      price: "Rp 1.500.000",
    },
    {
      id: 6,
      nama: "Mouse Gaming RGB",
      kategori: "Gadget",
      image: "https://source.unsplash.com/random/900x700/?mouse",
      kondisi: "95%",
      countdown: 4,
      price: "Rp 500.000",
    },
    {
      id: 7,
      nama: "Kamera Mirrorless Sony A7III",
      kategori: "Gadget",
      image: "https://source.unsplash.com/random/900x700/?camera",
      kondisi: "90%",
      countdown: 2,
      price: "Rp 25.000.000",
    },
    {
      id: 8,
      nama: "Laptop ASUS ROG",
      kategori: "Gadget",
      image: "https://source.unsplash.com/random/900x700/?laptop",
      kondisi: "85%",
      countdown: 6,
      price: "Rp 20.000.000",
    },
    {
      id: 9,
      nama: "Monitor Gaming Curved",
      kategori: "Gadget",
      image: "https://source.unsplash.com/random/900x700/?monitor",
      kondisi: "95%",
      countdown: 8,
      price: "Rp 5.000.000",
    },
  ];
  

const Preloved = () => {
  return (
    <div className="bg-Primary-LightBlue">
     
      <main className="w-full p-4">
        <section className="w-full bg-gradient-to-r gap-6 flex flex-col rounded-2xl p-4 to-Primary-Blue from-Primary-Purple">
          <div className="flex gap-4 items-center">
            <p className="text-3xl aspect-square p-2 bg-Secondary-LightYellow bg-opacity-50 rounded-full">🤗</p>
            <p className="text-base font-medium text-Primary-LightBlue">Punya barang tak terpakai? jual di sini aja!</p>
          </div>
          <Link to={'/preloved/add'}>
          <button className="px-4 py-2 btn text-base self-end font-semibold text-Primary-Blue">Mulai Jualan</button>
          </Link>
        </section>

        <section className="w-full py-4 mb-8">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Primary-White py-1 px-3 rounded-2xl">😍 Temukan Preloved favoritmu!</h2>
            <div className="h-full aspect-square bg-Primary-Blue rounded-lg w-9 flex justify-center items-center">
              <Icon icon="mingcute:settings-6-line" className="text-Primary-LightBlue text-lg" />
            </div>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
            <input type="text" className="grow text-Text-Placeholder" placeholder="Search" />
          </label>
        </section>
        <section className="w-full flex flex-wrap justify-center gap-4 ">
          {prelove.map((item, index) => (
            <Link to={`/preloved/${item.id}`}>
              <div key={index} className="w-40 h-72 self-start p-3 border hover:-translate-y-1 duration-300 ease-in-out flex flex-col justify-between border-Outline-gray rounded-2xl">
                <div className="flex-col flex gap-2">
                  <div>
                    <h2 className="text-[0.675rem] font-medium inline-block bg-Primary-White py-px px-4 rounded-2xl">{item.kategori}</h2>
                  </div>
                  <img src={item.image} className="w-full aspect-square rounded-lg" loading="lazy" alt="product-image" />
                  <h2 className="text-[0.675rem] font-medium ">{item.nama}</h2>
                  <div>
                    <h2 className="text-[0.675rem] font-medium inline-block bg-Secondary-LightTeal py-px px-3 rounded-2xl">{item.price}</h2>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[0.675rem]  font-semibold">⭐ Kondisi {item.kondisi}</p>
                  <p className="text-[0.675rem] font-light">{item.countdown} Hari</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

    </div>
  );
};

export default Preloved;
