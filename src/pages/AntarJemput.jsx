import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import HeaderCard from "../components/HeaderCard";

const antarJemput = [
  {
    title: "Ada yang bisa anterin aku dari FEB ke Nakoa?",
    area: "Area Kampu UB Veteran",
    kategori: "Antar Jemput",
    created_at: "5 menit yang lalu",
  },
  {
    title: "Ada yang bisa anterin makanan dari suhat ke kerto?",
    area: "Area Soekarno Hatta",
    kategori: "Antar Barang",
    created_at: "10 menit yang lalu",
  },
  {
    title: "Ada yang bisa anterin kipas angin dari Merjosari ke Suhat?",
    area: "Area Taman Merjosari",
    kategori: "Antar Barang",
    created_at: "7 menit yang lalu",
  },
];

const AntarJemput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAntarJemput = antarJemput.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-Primary-LightBlue font-Poppins">
      <main className="w-full p-4">
        <HeaderCard btnText={"Tambah Antar Jemput"} to={"/antarJemput/add"} message={"Ada lokasi yang harus dicapai? atau barang yang harus sampai? "} />

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
        {filteredAntarJemput && !filteredAntarJemput.length > 0 ? (
          <section className="flex justify-center items-center">
            <p className="">Tidak ada data</p>
          </section>
        ) : (
          <section className="w-full flex flex-col gap-3  ">
            {filteredAntarJemput.map((item, index) => (
              <div className="w-full border border-Outline-gray rounded-2xl p-4 hover:bg-Primary-White duration-300 hover:shadow-2xl hover:-translate-y-1 ease-in-out">
                <div className="mb-2">
                  <h2 className="text-xs  text-Primary-White font-medium inline-block bg-gradient-to-r from-Primary-Purple to-Primary-Blue py-px px-4 rounded-2xl">{item.kategori}</h2>
                </div>
                <h1 className="text-Text-Black text-base font-medium mb-3">{item.title}</h1>
                <p className="text-Text-Black text-sm mb-1">📍 {item.area}</p>
                <div className="flex justify-end w-full">
                  <p className="text-Text-Black text-xs self-end mb-3">{item.created_at}</p>
                </div>
                <button className="btn w-full mt-4 bg-Primary-Blue border-0 text-Primary-White hover:bg-Primary-Purple active:bg-opacity-75 duration-300 ease-in-out">
                  Ambil Tawaran <Icon icon="mingcute:whatsapp-line" />
                </button>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default AntarJemput;
