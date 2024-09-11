import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllPreloved } from "../../api/services/preloved";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { preloved } from "../../data/dummy";
const Preloved = () => {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  

  

  return (
    <section className="px-4  md:px-24 font-Poppins pt-8 mb-8">
      <div className="flex items-center lg:justify-start lg:gap-8 justify-between mb-4 ">
        <h2 className="text-base lg:text-xl font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 px-3 rounded-2xl">😍 Barang Preloved terfavorit</h2>
        <Link to={"/preloved"}>
          <p className="text-xs lg:text-sm text-Primary-Blue text-center hover:underline underline-offset-1">Selengkapnya</p>
        </Link>
      </div>
      {isLoading ? (
        <div className="h-28 lg:h-60 flex justify-center items-center">
          <span className="loading loading-dots loading-sm"></span>
        </div>
      ) : (
        <>
          {preloved && preloved.length > 0 ? (
            <Splide
              options={{
                arrows: false,
                focus: "center",
                gap: 10,
                autoHeight: true,
                autoplay: true,
              }}
            >
              {preloved.map((item, index) => (
                <SplideSlide key={index}>
                    <Link to={`preloved/${index+1}`}>
                  <div className="w-full duration-100 ease-in-out flex p-4 bg-gradient-to-r mb-10 gap-4 from-Primary-Purple font-Poppins to-Primary-Blue rounded-2xl">
                    <img src={`https://picsum.photos/seed/${item.name}/800/800`} alt="card-image" loading="lazy" draggable="false" className="h-28 lg:h-60 object-cover aspect-square rounded-xl" />
                    <div className="flex flex-col justify-between lg:justify-center gap-4">
                      <h1 className="text-base lg:text-2xl text-Primary-LightBlue font-medium">{item.name}</h1>
                      <div className="flex flex-col lg:gap-4">
                        <div>
                          <div className="text-sm lg:text-2xl inline-block text-Primary-Blue bg-Primary-LightBlue px-3 py-px mb-2   rounded-2xl text-center font-semibold">{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR',minimumFractionDigits: 0  })}</div>
                        </div>
                        <p className="text-base lg:text-2xl text-Primary-LightBlue font-medium">⭐ Kondisi {item.kondisi}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </SplideSlide>
              ))}
            </Splide>
          ) : (
            <div className="h-28 lg:h-60 flex justify-center items-center">
              <p className="text-Text-Black font-Poppins text-lg font-medium">Tidak ada preloved</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Preloved;
