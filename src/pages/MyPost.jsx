import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { deleteJasaAntar, getJasaAntarByUserId } from "../api/services/jasaAntar";
import { deleteJastip, getJastipByUserId } from "../api/services/jastip";
import { deleteKomunitas, getKomunitasByUserId } from "../api/services/komunitas";
import { deletePreloved, getPrelovedByUserId } from "../api/services/preloved";
import DropdownCheckbox from "../components/DropdownCheckbox";
import HeaderCard from "../components/HeaderCard";
import {useAuth} from "../hooks/useAuth";

const MyPost = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { userData } = useAuth();
  
  useEffect(() => {

    const fetchData = async () => {
      const prelovedData = await getPrelovedByUserId(userData.idUser);
      const jastipData = await getJastipByUserId(userData.idUser);
      const jasaAntarData = await getJasaAntarByUserId(userData.idUser);
      const komunitasData = await getKomunitasByUserId(userData.idUser);
  
      const prelovedWithType = prelovedData.map((item) => ({ ...item, type: "Preloved" ,idName : "idPreloved"}));
      const jastipWithType = jastipData.map((item) => ({ ...item, type: "Jastip",idName : "idJastip" }));
      const jasaAntarWithType = jasaAntarData.map((item) => ({ ...item, type: "JasaAntar",idName : "idJasantar" }));
      const komunitasWithType = komunitasData.map((item) => ({ ...item, type: "KomunitasBraw" ,idName : "idKomunitasbraw"}));
  
      const combinedData = [...prelovedWithType, ...jastipWithType, ...jasaAntarWithType, ...komunitasWithType];
      
      setData(combinedData);
      setIsLoading(false);
    };
    
    userData && fetchData();
  }, [userData]);
  




  const handleCategorySelect = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  const kategori = ["Preloved", "Jastip","JasaAntar","Komunitas"];

  const handleDelete = async (id, type) => {
    try {
      switch (type) {
        case 'Preloved':
          await deletePreloved(id);
          break;
        case 'Jastip':
          await deleteJastip(id);
          break;
        case 'JasaAntar':
          await deleteJasaAntar(id);
          break;
        case 'KomunitasBraw':
          await deleteKomunitas(id);
          break;
        default:
          break;
      }
      window.location.reload()

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-Primary-LightBlue">
      <main className="w-full  p-4 md:px-24 md:gap-8 flex md:flex-row-reverse flex-col">
        <div>
          <HeaderCard emoticon={"🤗"} to={""} btnText={"Hubungi Customer Service"} message={"Ingin mengiklankan postingan anda?"} />

          <section className="w-full py-4 mb-8">
            <div className="flex md:hidden items-center justify-between mb-4 ">
              <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😍 Postingan Saya</h2>
              <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />
            </div>
          </section>
        </div>
        <div className="w-full">
          <div className="md:flex  hidden items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😍 Postingan Saya</h2>
            <DropdownCheckbox option={kategori} onSelect={handleCategorySelect} />
          </div>
          {isLoading ? (
            <section className="w-full h-[50vh]  flex justify-center items-center">
              <span className="loading loading-dots loading-sm"></span>
            </section>
          ) : (
            <>
              {data && !data.length > 0  ? (
                <section className="flex justify-center items-center">
                  <p className="">Tidak ada postingan saya</p>
                </section>
              ) : (
                <section className="w-full mx-auto flex flex-col gap-4  ">
                  <>
                  {data &&
                    data.map((item, index) => (
                      <div key={index} className="rounded-2xl w-full flex justify-between hover:bg-Primary-White duration-300 ease-in-out hover:shadow-xl p-3 gap-2  border border-Outline-gray">
                        <img src={"https://source.unsplash.com/random/900x700/?bag"} draggable="false" loading="lazy" alt="card-image" className="h-28 md:h-36 object-cover aspect-square rounded-xl" />
                        <div className="flex-col flex justify-between w-full ">
                          <div>
                            <h2 className="text-xs  text-Primary-White font-medium inline-block bg-gradient-to-r from-Primary-Purple to-Primary-Blue py-px px-4 rounded-2xl">{item.type}</h2>
                          </div>
                          <div className="">
                            <h3 className="text-sm font-semibold text-Text-Black mb-2">{item.title}</h3>
                          </div>
                          <div className="flex justify-between self-end items-end gap-2">
                            <Icon icon={"mdi:trash"} onClick={() => document.getElementById(index).showModal()} className="text-2xl text-Text-Placeholder" />

                            <dialog id={index} className="modal ">
                              <div className="modal-box bg-Primary-LightBlue flex items-center flex-col gap-8 p-4">
                                <Icon icon={"material-symbols:logout"} className="text-Primary-Blue text-8xl" />
                                <h3 className="font-semibold text-2xl text-Primary-Blue">Yakin ingin hapus?</h3>
                                <div className="modal-action flex w-full gap-4  justify-center">
                                  <form method="dialog" className="w-full">
                                    <button className="btn border-0 bg-Primary-Blue text-base font-semibold hover:bg-Primary-Purple duration-300 ease-in-out active:bg-opacity-75 text-Primary-LightBlue w-full">Tidak</button>
                                  </form>
                                  <button
                                    onClick={() => handleDelete(item[item.idName], item.type)}
                                    className="btn border bg-Primary-LightBlue  text-base font-semibold hover:bg-Secondary-LightTeal duration-300 ease-in-out text-Primary-Blue border-Outline-gray w-1/2 "
                                  >
                                    Hapus
                                  </button>
                                </div>
                              </div>
                            </dialog>
                            <Link key={index} to={`/preloved/${item[item.idName]}`}>
                              <button className="text-[0.625rem] btn btn-xs hover:bg-Primary-Purple ease-in-out duration-200 border-0  bg-Primary-Blue text-Primary-White">
                                Selengkapnya
                                <span>
                                  <Icon icon="ooui:next-ltr" />
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                
                    </>
                </section>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyPost;
