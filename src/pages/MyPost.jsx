import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderCard from "../components/HeaderCard";

const MyPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);
  return (
    <div className="bg-Primary-LightBlue">
      <main className="w-full p-4">
        <HeaderCard emoticon={"🤗"} to={""} btnText={"Hubungi Customer Service"} message={"Ingin mengiklankan postingan anda?"} />

        <section className="w-full py-4 mb-8">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold bg-Secondary-LightYellow text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">😍 Postingan Saya</h2>
            <div className="h-full aspect-square bg-Primary-Blue rounded-lg w-9 flex justify-center items-center">
              <Icon icon="mingcute:settings-6-line" className="text-Primary-LightBlue text-lg" />
            </div>
          </div>
        </section>
        {data && !data.length > 0 ? (
          <section className="flex justify-center items-center">
            <p className="">Tidak ada postingan saya</p>
          </section>
        ) : (
          <section className="w-full grid grid-cols-2 place-items-center mx-auto gap-4 ">
            {data &&
              data.map((item, index) => (
                <Link key={index} to={`/preloved/${item.id_preloved}`}>
                  <div key={index} className="rounded-2xl w-full flex justify-between hover:bg-Primary-White duration-300 ease-in-out hover:shadow-xl p-3 gap-2  border border-Outline-gray">
                    <img src={item.image} draggable="false" loading="lazy" alt="card-image" className="h-28 object-cover aspect-square rounded-xl" />
                    <div className="flex-col flex justify-between ">
                      <div className="">
                        <h3 className="text-sm font-semibold text-Text-Black mb-2">{item.name}</h3>
                        <p className="inline-block font-medium text-xs px-3 py-px bg-Secondary-LightTeal text-Text-Black rounded-2xl">{item.price}</p>
                      </div>
                      <div className="flex justify-between items-end gap-2">
                        <p className="text-xs font-normal text-Text-Black">{item.closeOrder}</p>
                        <button className="text-[0.625rem] btn btn-xs hover:bg-Primary-Purple ease-in-out duration-200 border-0  bg-Primary-Blue text-Primary-White">
                          Selengkapnya
                          <span>
                            <Icon icon="ooui:next-ltr" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                </Link>
              ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default MyPost;
