import { Icon } from "@iconify/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

const CardDetail = ({ nama, price, desc, photo, kategori, kondisi, userFullName, closeOrder, open,link }) => {
  return (
    <div className="border border-Outline-gray p-5 rounded-2xl">
      <div>
        <h2 className="text-xs  text-Primary-White font-medium inline-block bg-gradient-to-r from-Primary-Purple to-Primary-Blue py-px px-4 rounded-2xl mb-4">{kategori}</h2>
      </div>
      <Splide
        options={{
          gap: 10,
          arrows: false,
          autoplay: true,
        }}
      >
        {photo &&
          photo.map((item, index) => (
            <SplideSlide key={index}>
              <img src={item} className="w-full mb-10 aspect-square object-cover rounded-lg" alt="image" loading="lazy" />
            </SplideSlide>
          ))}
      </Splide>
      <h3 className="mt-4 text-base font-semibold text-Text-Black">{nama}</h3>
      {price && kondisi && (
        <div className="flex  justify-between items-center mt-4">
          {price && <p className="text-xl font-medium px-4 bg-Secondary-LightTeal text-Text-Black inline-block rounded-2xl ">Rp. {price}</p>}
          {kondisi && <p className="text-sm text-Text-Black  font-medium">⭐ Kondisi {kondisi}</p>}
        </div>
      )}
      {price && !kondisi && <div className="flex  justify-between items-center mt-4">{price && <p className="text-xl font-medium px-4 bg-Secondary-LightTeal text-Text-Black inline-block rounded-2xl ">{price}</p>}</div>}
      <p className="text-sm mt-4 text-left text-Text-Black mb-4">{desc}</p>
      {open && (
        <>
          <p className="text-sm mt-4 text-left text-Text-Black">{open}</p>
          <p className="text-base font-semibold mt-2 text-left text-Text-Black mb-4">Tutup Order {closeOrder}</p>
        </>
      )}
      <div className="w-full border border-Outline-gray flex px-4 py-2 gap-4 items-center rounded-lg">
        <img src="https://source.unsplash.com/random/900×700/?profile" className="w-7 bg-Primary-Blue aspect-square object-cover rounded-full" alt="profile-image" loading="lazy" draggable="false" />
        <p className="text-sm font-normal text-Text-Black">{userFullName}</p>
      </div>
      {price ? (
        <button className="btn w-full mt-4 bg-Primary-Blue border-0 text-Primary-White hover:bg-Primary-Purple active:bg-opacity-75 duration-300 ease-in-out">
          Beli Sekarang <Icon icon="mingcute:whatsapp-line" />
        </button>
      ) : (
        <div className="w-full  flex gap-1 mt-4 justify-end">
          {link && (
            <button className="btn w-2/4 bg-Primary-Blue border-0 text-Primary-White hover:bg-Primary-Purple active:bg-opacity-75 duration-300 ease-in-out">
              Kunjungi Web <Icon icon="mingcute:whatsapp-line" />
            </button>
          )}
          <button className="btn  w-2/5  bg-Primary-Blue border-0 text-Primary-White hover:bg-Primary-Purple active:bg-opacity-75 duration-300 ease-in-out">
            Chat <Icon icon="mingcute:whatsapp-line" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
