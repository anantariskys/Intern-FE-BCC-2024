import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPreloved } from '../api/services/preloved';

import Card from "../components/Card";
import HeaderCard from "../components/HeaderCard";

const Preloved = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPreloved()
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-Primary-LightBlue">
      <main className="w-full p-4">
        <HeaderCard btnText={"Mulai Jualan"} to={"/preloved/add"} message={"Punya barang tak terpakai? jual di sini aja!"}  />
        <section className="w-full py-4 mb-8">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😍 Temukan Preloved favoritmu!</h2>
            <div className="h-full aspect-square bg-Primary-Blue rounded-lg w-9 flex justify-center items-center">
              <Icon icon="mingcute:settings-6-line" className="text-Primary-LightBlue text-lg" />
            </div>
          </div>
          <label className="input input-bordered bg-transparent flex items-center gap-2">
            <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
            <input type="text" className="grow bg-transparent text-Text-Black" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
          </label>
        </section>
        {filteredData && !filteredData.length > 0 ? (
          <section className="flex justify-center items-center">
            <p className="">Tidak ada barang preloved</p>
          </section>
        ) : (
          <section className="w-full grid grid-cols-2 place-items-center mx-auto gap-4 ">
            {filteredData &&
              filteredData.map((item, index) => (
                <Link key={index} to={`/preloved/${item.id_preloved}`}>
                  <Card countdown={item.countdown} type="preloved" image={item.image} kategori={item.category} kondisi={item.confition} nama={item.title} price={item.price} />
                </Link>
              ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Preloved;
