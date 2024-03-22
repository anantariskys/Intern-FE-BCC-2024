import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPreloved } from "../api/services/preloved";
import Card from "../components/Card";
import DropdownCheckbox from "../components/DropdownCheckbox";
import HeaderCard from "../components/HeaderCard";
import { Icon } from "@iconify/react";

const Preloved = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPreloved();
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

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(item.category))
  );

  const handleCategorySelect = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };
  const handleSearchChange = (e) => {
    setIsLoading(true);
    setSearchTerm(e.target.value);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };


  const kategori = ["Pendidikan", "Fashion", "Perlengkapan Kos", "Gadget", "Hobi"];

  return (
    <div className="bg-Primary-LightBlue">
      <main className="w-full p-4 md:px-24 md:gap-8 flex md:flex-row-reverse flex-col">
        <div>
          <HeaderCard btnText={"Mulai Jualan"} to={"/preloved/add"} message={"Punya barang tak terpakai? Jual di sini aja!"} />
          <section className="w-full py-4 mb-8">
            <div className="flex md:hidden items-center justify-between mb-4 ">
              <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😍 Temukan Preloved favoritmu!</h2>
              <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />
            </div>
            <label className="input input-bordered bg-transparent flex items-center gap-2">
              <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
              <input type="text" className="grow bg-transparent text-Text-Black" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            </label>
          </section>
        </div>
        <div className="w-full">
          <div className="md:flex hidden items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😍 Temukan Preloved favoritmu!</h2>
            <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />
          </div>
          {isLoading ? (
            <section className="w-full h-[50vh]  flex justify-center items-center">
              <span className="loading loading-dots loading-sm"></span>
            </section>
          ) : (
            <>
              {filteredData && filteredData.length > 0 ? (
                <section className="w-full grid grid-cols-2  lg:grid-cols-4 place-items-center mx-auto gap-4">
                  {filteredData.map((item, index) => (
                    <Link key={index} to={`/preloved/${item.idPreloved}`}>
                      <Card countdown={item.countdown} type="preloved" image={item.image} kategori={item.category} kondisi={item.condition} nama={item.title} price={item.price} />
                    </Link>
                  ))}
                </section>
              ) : (
                <section className="flex w-full h-[50vh] justify-center items-center">
                  <p className="">Tidak ada barang preloved</p>
                </section>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Preloved;
