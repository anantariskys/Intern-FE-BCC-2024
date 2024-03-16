import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderCard from "../components/HeaderCard";

const komunitas = [
  {
    title: "Jasa Sablon Kaos Murah",
    desc: "Sablon kaos, kemeja, jaket, dll. murah meriah",
    kategori: "Penawaran Jasa",
    link: "https://brone.ub.ac.id",
    photo: "https://source.unsplash.com/random/900x700/?shirt",
  },
  {
    title: "Aku nemu powerbank",
    desc: "di gedung rektorat di dekat jalan utama UB",
    kategori: "BRAW! Share",
    link: "",
    photo: "https://source.unsplash.com/random/900x700/?powerbank",
  },
  {
    title: "Aku mau promosiin bisnis minuman",
    desc: "aku baru buka bisnis minuman dingin di jl. sigura gura",
    kategori: "Promosi Bisnis",
    link: "https://brone.ub.ac.id",
    photo: "https://source.unsplash.com/random/900x700/?drink",
  },
  {
    title: "Sewa Perlengkapan Camping",
    desc: "Menyediakan alat alat perkemahan, tenda, kompor, matras, dll",
    kategori: "Promosi Bisnis",
    link: "https://brone.ub.ac.id",
    photo: "https://source.unsplash.com/random/900x700/?camping",
  },
  {
    title: "Kuesioner tentang sampah",
    desc: "Tolong isi ya teman teman",
    kategori: "Kuesioner",
    link: "https://brone.ub.ac.id",
    photo: "https://source.unsplash.com/random/900x700/?trash",
  },
];

const Komunitas = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const filteredKomunitas = komunitas.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div className="bg-Primary-LightBlue font-Poppins">
        <main className="w-full p-4">
          <HeaderCard btnText={"Tambah Antar Jemput"} to={"/Komunitas/add"} message={"Ada lokasi yang harus dicapai? atau barang yang harus sampai? "} />
  
          <section className="w-full py-4 mb-8">
            <div className="flex items-center justify-between mb-4 ">
              <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😲 Antar Jemput BRAW! </h2>
              <div className="h-full aspect-square bg-Primary-Blue rounded-lg w-9 flex justify-center items-center">
                <Icon icon="mingcute:settings-6-line" className="text-Primary-LightBlue text-lg" />
              </div>
            </div>
            <label className="input input-bordered bg-transparent flex items-center gap-2">
              <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
              <input type="text" className="grow bg-transparent text-Text-Black" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            </label>
          </section>
          {filteredKomunitas.length === 0 ? (
            <section className="flex justify-center items-center">
              <p className="">Tidak ada data</p>
            </section>
          ) : (
            <section className="w-full flex flex-col gap-3  ">
              {filteredKomunitas.map((item, index) => (
                <Link to={`/komunitas/${item.id}`}>
                <div className="w-full border h-36 flex gap-2 border-Outline-gray rounded-2xl p-3 hover:bg-Primary-White duration-300 hover:shadow-2xl hover:-translate-y-1 ease-in-out">
                  <img src={item.photo} className="w-28 aspect-square object-cover rounded-lg" alt="card-image" loading="lazy" draggable="false" />
                  <div className="size-full flex flex-col justify-between ">
                    <div className="">
                      <h2 className="text-xs  text-Primary-White font-medium inline-block bg-gradient-to-r from-Primary-Purple to-Primary-Blue py-px px-4 rounded-2xl">{item.kategori}</h2>
                    </div>
                    <h1 className="text-Text-Black text-sm font-semibold">{item.title}</h1>
                    <p className="text-Text-Black text-xs  font-medium">{item.desc}</p>
                    <div className="w-full  flex gap-1 justify-end">
                      {item.link && (
                        <button className="btn btn-xs w-3/5 bg-Primary-Blue border-0 text-Primary-White hover:bg-Primary-Purple active:bg-opacity-75 duration-300 ease-in-out">
                          Kunjungi Web <Icon icon="mingcute:whatsapp-line" />
                        </button>
                      )}
                      <button className="btn btn-xs w-2/5  bg-Primary-Blue border-0 text-Primary-White hover:bg-Primary-Purple active:bg-opacity-75 duration-300 ease-in-out">
                        Chat <Icon icon="mingcute:whatsapp-line" />
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </section>
          )}
        </main>
      </div>
    );
  };
  
  export default Komunitas;