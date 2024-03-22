import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllKomunitas } from "../api/services/komunitas";
import DropdownCheckbox from "../components/DropdownCheckbox";

import HeaderCard from "../components/HeaderCard";

const Komunitas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllKomunitas();
        setData(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredKomunitas = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategories.length === 0 || selectedCategories.includes(item.category)));

  const handleCategorySelect = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const kategori = ["Penawaran Jasa", "Promosi Bisnis","BRAW! Share","Kuesioner"];

  return (
    <div className="bg-Primary-LightBlue font-Poppins">
      <main className="w-full p-4 lg:px-24 lg:py-10 lg:gap-8 flex lg:flex-row-reverse flex-col ">
        <div>
          <HeaderCard btnText={"Tambah Post"} to={"/Komunitas/add"} message={"Punya jasa, bisnis, kuesioner, atau barang yang ingin diberitahukan?"} />

          <section className="w-full py-4 mb-8">
            <div className="flex lg:hidden items-center justify-between mb-4 ">
              <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😲 Komunitas BRAW! </h2>
              <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />

            </div>
            <label className="input input-bordered bg-transparent flex items-center gap-2">
              <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
              <input type="text" className="grow bg-transparent text-Text-Black" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            </label>
          </section>
        </div>
        <div className="w-full">
          <div className="lg:flex hidden lg:w-4/5 ms-auto items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😲 Komunitas BRAW! </h2>
            <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />

          </div>

          {isLoading ? (
            <section className="w-full h-[50vh]  flex justify-center items-center">
              <span className="loading loading-dots loading-sm"></span>
            </section>
          ) : (
            <>
              {filteredKomunitas.length === 0 ? (
                <section className="flex w-full h-[50vh]  justify-center items-center">
                  <p className="">Tidak ada data</p>
                </section>
              ) : (
                <section className="w-full flex flex-col gap-3  ">
                  {filteredKomunitas.map((item, index) => (
                    <Link key={index} to={`/komunitas/${item.idKomunitasbraw}`}>
                      <div className="w-full lg:w-4/5  ms-auto border lg:h-40 h-36 flex gap-2 border-Outline-gray rounded-2xl p-3 hover:bg-Primary-White duration-300 hover:shadow-2xl hover:-translate-y-1 ease-in-out">
                        <img src={"https://source.unsplash.com/random/900×700/?fruit"} className="w-28  md:w-36  aspect-square object-cover rounded-lg" alt="card-image" loading="lazy" draggable="false" />
                        <div className="size-full flex  flex-col justify-between ">
                          <div className="">
                            <h2 className="text-xs  text-Primary-White font-medium inline-block bg-gradient-to-r from-Primary-Purple to-Primary-Blue py-px px-4 rounded-2xl">{item.category}</h2>
                          </div>
                          <h1 className="text-Text-Black text-sm font-semibold">{item.title}</h1>
                          <p className="text-Text-Black text-xs  font-medium line-clamp-1 lg:line-clamp-3">{item.description}</p>
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
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Komunitas;
