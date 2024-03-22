import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllJastip } from "../../api/services/jastip";

const Jastip = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllJastip();
        setData(response.data.slice(0, 6));

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="px-4  md:px-24 font-Poppins mt-8 mb-8">
      <div className="flex items-center lg:justify-start lg:gap-8 justify-between mb-4">
        <h2 className="text-base lg:text-xl font-semibold bg-Secondary-LightYellow bg-opacity-50 text-Text-Black py-1 px-3 rounded-2xl">😉 Mau nitip apa hari ini?</h2>
        <Link to={"/jastip"}>
          <p className="text-xs lg:text-sm text-Primary-Blue text-center hover:underline underline-offset-1">Selengkapnya</p>
        </Link>
      </div>
      {isLoading ? (
        <div className="h-28 lg:h-80 flex justify-center items-center">
          <span className="loading loading-dots loading-sm"></span>
        </div>
      ) : (
        <>
          {data && data.length > 0 ? (
            <div className="flex flex-col gap-4 md:gap-2 md:grid md:grid-cols-4 lg:grid-cols-6 place-items-center">
              {data.map((item, index) => (
                <Link  key={index} to={`jastip/${item.idJastip}`}>
                  {" "}
                  <div
                   
                    className="rounded-2xl w-full  h-auto md:h-72 flex  flex-row md:flex-col justify-between md:justify-start gap-2 md:gap-1 hover:bg-Primary-White duration-300 ease-in-out hover:shadow-xl p-3  border border-Outline-gray"
                  >
                    <img src={'https://source.unsplash.com/random/900×700/'} draggable="false" loading="lazy" alt="card-image" className="h-28 md:h-auto md:w-full  object-cover aspect-square rounded-xl md:rounded-md" />
                    <div className="flex-col   flex justify-between md:h-full ">
                      <div className="">
                        <h3 className="text-sm font-semibold text-Text-Black mb-2 line-clamp-2">{item.title}</h3>
                        <p className="inline-block md:hidden font-medium text-xs px-3 py-px bg-Secondary-LightTeal text-Text-Black rounded-2xl">{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR',minimumFractionDigits: 0  })}</p>
                      </div>
                      <div className="flex flex-row md:flex-col justify-between items-end md:items-start gap-1  md:mt-1">
                        <p className=" hidden md:inline-block md:mb-1 font-medium text-xs px-3 py-px bg-Secondary-LightTeal text-Text-Black rounded-2xl">{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR',minimumFractionDigits: 0  })}</p>
                        <p className="text-xs font-normal text-Text-Black">Close Order {item.closeOrder}</p>
                        <button className="text-[0.625rem] md:hidden btn btn-xs hover:bg-Primary-Purple ease-in-out duration-200 border-0  bg-Primary-Blue text-Primary-White">
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
              <p className="text-Text-Black font-Poppins text-lg font-medium">Tidak ada Jastip</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Jastip;
