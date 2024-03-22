import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllJastip } from "../api/services/jastip";
import Card from "../components/Card";
import DropdownCheckbox from "../components/DropdownCheckbox";
import HeaderCard from "../components/HeaderCard";



const Jastip = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllJastip();
        setData(response.data);
        console.log(response)
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredJastip = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(item.category))
  );

  const handleCategorySelect = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const kategori =[
    "Makanan","Barang"
  ]

  return (
    <div className="bg-Primary-LightBlue">
      <main className="w-full p-4 lg:px-24 lg:gap-8 flex lg:flex-row-reverse flex-col">
        <div>
          <HeaderCard btnText={"Tambah Jastip"} to={"/jastip/add"} message={"Promosiin layanan jastip kamu di sini yuk!"} />

          <section className="w-full py-4 mb-8">
            <div className="flex lg:hidden items-center justify-between mb-4 ">
              <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😉 Temukan Jastip-mu!</h2>
              <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />

            </div>
            <label className="input input-bordered bg-transparent flex items-center gap-2">
              <Icon icon="mdi:search" className="text-xl text-Outline-gray" />
              <input type="text" className="grow bg-transparent text-Text-Black" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            </label>
          </section>
        </div>
        <div className="w-full">
          <div className="items-center hidden lg:flex justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😉 Temukan Jastip-mu!</h2>
            <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />

          </div>
          {isLoading ? (
            <section className="w-full h-[50vh]  flex justify-center items-center">
              <span className="loading loading-dots loading-sm"></span>
            </section>
          ) : (
            <>
              {filteredJastip && !filteredJastip.length > 0 ? (
                <section className="flex w-full h-[50vh] justify-center items-center">
                  <p className="">Tidak ada jasa titip</p>
                </section>
              ) : (
                <section className="w-full grid grid-cols-2 md:grid-cols-4 place-items-center mx-auto gap-4 ">
                  {filteredJastip.map((item, index) => (
                    <Link to={`/jastip/${item.idJastip}`}>
                      <Card key={index} image={item.image} type="jastip" kategori={item.category} nama={item.title} price={item.price} closeOrder={item.closeOrder} buka={item.openDay} />
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

export default Jastip;
