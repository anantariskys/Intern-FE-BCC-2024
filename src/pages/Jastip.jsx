import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import HeaderCard from "../components/HeaderCard";

const jastip = [
  {
    nama: "Mochi Segala Rasa",
    price: "Rp25.000/pax",
    open: "Minggu - Senin",
    closeOrder: "21.00",
    kategori: "makanan",
    photo: "https://source.unsplash.com/random/900x700/?mochi",
  },
  {
    nama: "Nasi Goreng Mantap",
    price: "Rp30.000/pax",
    open: "Setiap Hari",
    closeOrder: "22.00",
    kategori: "makanan",
    photo: "https://source.unsplash.com/random/900x700/?nasigoreng",
  },
  {
    nama: "Es Krim Enak",
    price: "Rp15.000/cup",
    open: "Setiap Hari",
    closeOrder: "20.00",
    kategori: "makanan",
    photo: "https://source.unsplash.com/random/900x700/?icecream",
  },
  {
    nama: "Tas Trendy",
    price: "Rp150.000/pcs",
    open: "Senin - Jumat",
    closeOrder: "17.00",
    kategori: "barang",
    photo: "https://source.unsplash.com/random/900x700/?bag",
  },
  {
    nama: "Buku Inspiratif",
    price: "Rp50.000/pcs",
    open: "Setiap Hari",
    closeOrder: "18.00",
    kategori: "barang",
    photo: "https://source.unsplash.com/random/900x700/?book",
  },
  {
    nama: "Kamera Keren",
    price: "Rp500.000/pcs",
    open: "Sabtu - Minggu",
    closeOrder: "20.00",
    kategori: "barang",
    photo: "https://source.unsplash.com/random/900x700/?camera",
  },
  {
    nama: "Sweater Hangat",
    price: "Rp100.000/pcs",
    open: "Setiap Hari",
    closeOrder: "19.00",
    kategori: "barang",
    photo: "https://source.unsplash.com/random/900x700/?sweater",
  },
  {
    nama: "Sepatu Sporty",
    price: "Rp200.000/pcs",
    open: "Senin - Jumat",
    closeOrder: "17.00",
    kategori: "barang",
    photo: "https://source.unsplash.com/random/900x700/?shoes",
  },
  {
    nama: "Topi Keren",
    price: "Rp50.000/pcs",
    open: "Setiap Hari",
    closeOrder: "18.00",
    kategori: "barang",
    photo: "https://source.unsplash.com/random/900x700/?hat",
  },
  {
    nama: "Bantal Lucu",
    price: "Rp75.000/pcs",
    open: "Sabtu - Minggu",
    closeOrder: "20.00",
    kategori: "barang",
    photo: "https://source.unsplash.com/random/900x700/?pillow",
  },
];


const Jastip = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJastip = jastip.filter((item) => item.nama.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-Primary-LightBlue">
      <main className="w-full p-4">
        <HeaderCard btnText={"Tambah Jastip"} to={"/jastip/add"} message={"Promosiin layanan jastip kamu di sini yuk!"} />

        <section className="w-full py-4 mb-8">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😉 Temukan Jastip-mu!</h2>
            <div className="h-full aspect-square bg-Primary-Blue rounded-lg w-9 flex justify-center items-center">
              <Icon icon="mingcute:settings-6-line" className="text-Primary-LightBlue text-lg" />
            </div>
          </div>
          <label className="input input-bordered bg-transparent flex items-center gap-2">
            <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
            <input type="text" className="grow bg-transparent text-Text-Black" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
          </label>
        </section>
        {filteredJastip && !filteredJastip.length > 0 ? (
          <section className="flex justify-center items-center">
            <p className="">Tidak ada jasa titip</p>
          </section>
        ) : (
          <section className="w-full grid grid-cols-2 place-items-center mx-auto gap-4 ">
            {filteredJastip.map((item, index) => (
              <Link to={`/jastip/${item.id}`} className="last:self">
                <Card key={index} image={item.image} type="jastip" kategori={item.kategori} nama={item.nama} price={item.price} closeOrder={item.closeOrder} buka={item.open} />
              </Link>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Jastip;
