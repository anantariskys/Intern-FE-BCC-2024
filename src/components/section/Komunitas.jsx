import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Komunitas = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const jasa = [
    {
      name: "Skin Care & Sunscreen Wardah",
      price: "Rp 41.000/pcs",
      closeOrder: "Close order -",
      image: "https://source.unsplash.com/random/900x700/?skincare",
    },
    {
      name: "Mochi Segala Rasa",
      price: "Rp 25.000/pax",
      closeOrder: "Close order 21.00",
      image: "https://source.unsplash.com/random/900x700/?mochi",
    },
    {
      name: "Titip Print Makalah",
      price: "Rp 5.000/pcs",
      closeOrder: "Close order 21.00",
      image: "https://source.unsplash.com/random/900x700/?paper",
    },
  ];
  
  

  return (
    <section className="px-4  md:px-24 font-Poppins mt-8 mb-8">
      <div className="flex items-center lg:justify-start lg:gap-8 justify-between mb-4 ">
        <h2 className="text-base lg:text-xl font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 px-3 rounded-2xl">🤩 Temukan jasa di BRAW!</h2>
        <Link to={"/komunitas"}>
          <p className="text-xs lg:text-sm text-Primary-Blue text-center hover:underline underline-offset-1">Selengkapnya</p>
        </Link>
      </div>
      {isLoading ? (
        <div className="h-28 lg:h-80 flex justify-center items-center">
          <span className="loading loading-dots loading-sm"></span>
        </div>
      ) : (
        <>
          {jasa && jasa.length > 0 ? (
            <div className="flex flex-col gap-4 md:gap-2 md:grid md:grid-cols-4 lg:grid-cols-6 place-items-center">
              {jasa.map((item, index) => (
                <Link className="w-full flex h-auto md:h-72" key={index} to={`komunitas/${item.idKomunitasbraw}`}>
                <div className="rounded-2xl w-full flex h-auto md:h-72 flex-row md:flex-col   hover:bg-Primary-White duration-300 ease-in-out hover:shadow-xl p-3 gap-2 border border-Outline-gray">
                  <div className="w-16 md:w-full flex justify-center items-center  aspect-square rounded-lg bg-Primary-Blue">
                    <Icon icon="fa6-solid:handshake" className="text-Primary-LightBlue text-2xl" />
                  </div>
                  <div className="flex flex-col justify-center gap-5 md:gap-3 md:w-full w-3/4">
                    <h3 className="text-base font-semibold text-Text-Black md:line-clamp-2 line-clamp-1">{item.name}</h3>
                    <div className="flex  w-full  justify-between">
                      <p className="font-medium text-xs px-3 py-px flex text-Text-Black  justify-center items-center bg-Secondary-LightTeal rounded-2xl">{item.category}</p>
                      <button className="text-[0.625rem] md:hidden btn btn-xs hover:bg-Primary-Purple ease-in-out border-0 duration-200  bg-Primary-Blue text-Primary-White">
                        Selengkapnya
                        <span>
                          <Icon icon="ooui:next-ltr" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="h-28 lg:h-80 flex justify-center items-center">
              <p className="text-Text-Black font-Poppins text-lg font-medium">Tidak ada preloved</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Komunitas;
