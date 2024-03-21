import React from "react";

const Card = ({ key, kategori, image, nama, price, kondisi, closeOrder, buka ,type}) => {
  return (
    <div key={key} className={`w-40 md:w-full ${type==="jastip"?"h-[19.063rem] ":"h-72"} md:h-80  p-3 border font-Poppins  hover:bg-Primary-White duration-300 hover:shadow-2xl hover:-translate-y-1 ease-in-out flex flex-col justify-between border-Outline-gray rounded-2xl`}>
      <div className="flex-col  flex gap-2">
        <div>
          <h2 className="text-xs  text-Primary-White font-medium inline-block bg-gradient-to-r from-Primary-Purple to-Primary-Blue py-px px-4 rounded-2xl">{kategori}</h2>
        </div>
        <img src={`https://source.unsplash.com/random/900x700/?${nama}`} className="w-full md:w-40 aspect-square rounded-lg object-cover"  loading="lazy" alt="product-image" />
        <h2 className="text-xs md:text-sm text-Text-Black font-semibold line-clamp-2 ">{nama}</h2>
        <div>
          <h2 className="text-xs text-Text-Black font-medium inline-block bg-Secondary-LightTeal py-px px-3 rounded-2xl">Rp. {price}</h2>
        </div>
      </div>
      {kondisi  && (
        <div className="flex justify-between items-center">
          <p className="text-xs text-Text-Black  font-semibold">⭐ {kondisi}</p>
          <p className="text-xs text-Text-Black font-light">10 Hari</p>
        </div>
      )}
      {closeOrder && buka && (
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-[0.625rem] text-Text-Black font-normal">{buka}</p>
          <p className="text-xs text-Text-Black font-semibold">Tutup Order {closeOrder}</p>
        </div>
      )}
    </div>
  );
};

export default Card;