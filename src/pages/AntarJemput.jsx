import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllJasaAntar } from "../api/services/jasaAntar";
import Card from "../components/Card";
import CardAntarJemput from "../components/CardAntarJemput";
import DropdownCheckbox from "../components/DropdownCheckbox";
import HeaderCard from "../components/HeaderCard";

const AntarJemput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllJasaAntar();
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

  const filteredAntarJemput = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategories.length === 0 || selectedCategories.includes(item.category)));

  const handleCategorySelect = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const category = [
    'Antar Jemput','Antar Barang'
  ]

  function formatTimeAgo(dateString) {
    const currentDate = new Date();
    const previousDate = new Date(dateString);
    const difference = currentDate.getTime() - previousDate.getTime();
    const seconds = Math.floor(difference / 1000);
  
    if (seconds < 60) {
      return "Baru saja";
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} ${minutes === 1 ? "menit" : "menit"} yang lalu`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} ${hours === 1 ? "jam" : "jam"} yang lalu`;
    } else if (seconds < 2592000) {
      const days = Math.floor(seconds / 86400);
      return `${days} ${days === 1 ? "hari" : "hari"} yang lalu`;
    } else if (seconds < 31536000) {
      const months = Math.floor(seconds / 2592000);
      return `${months} ${months === 1 ? "bulan" : "bulan"} yang lalu`;
    } else {
      const years = Math.floor(seconds / 31536000);
      return `${years} ${years === 1 ? "tahun" : "tahun"} yang lalu`;
    }
  }
  

  

  return (
    <div className="bg-Primary-LightBlue font-Poppins">
      <main className="w-full p-4 lg:px-24 lg:gap-8 flex lg:flex-row-reverse flex-col">
        <div>
          <HeaderCard btnText={"Tambah Antar Jemput"} to={"/antarJemput/add"} message={"Ada lokasi yang harus dicapai? atau barang yang harus sampai? "} />

          <section className="w-full py-4 mb-8">
            <div className="flex lg:hidden items-center justify-between mb-4 ">
              <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😲 Antar Jemput BRAW! </h2>
              <DropdownCheckbox option={category} onSelect={handleCategorySelect} />
            </div>
            <label className="input input-bordered bg-transparent flex items-center gap-2">
              <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
              <input type="text" className="grow bg-transparent text-Text-Black" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            </label>
          </section>
        </div>
        <div className="w-full">
          <div className="hidden lg:flex items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😲 Antar Jemput BRAW! </h2>
         
              <DropdownCheckbox option={category} onSelect={handleCategorySelect} />
          </div>

          {isLoading ? (
            <section className="w-full h-[50vh]  flex justify-center items-center">
              <span className="loading loading-dots loading-sm"></span>
            </section>
          ) : (
            <>
              {filteredAntarJemput && !filteredAntarJemput.length > 0 ? (
                <section className="flex w-full h-[50vh] justify-center items-center">
                  <p className="">Tidak ada data</p>
                </section>
              ) : (
                <section className="w-full flex flex-col gap-3  md:grid md:grid-cols-3 place-items-center mx-auto lg:gap-4 ">
                  {filteredAntarJemput.map((item, index) => (
                    <CardAntarJemput area={item.area} createdAt={item.createdAt} category={item.category} title={item.title} key={index} userId={item.idUser}/>
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

export default AntarJemput;
