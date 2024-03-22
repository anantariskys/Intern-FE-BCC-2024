import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUserDataByUserId } from '../api/services/auth';



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

const CardAntarJemput = ({title,area,createdAt,category,userId}) => {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserDataByUserId(userId);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  console.log(userId)
  return (
    <div className="w-full border md:h-full md:flex flex-col justify-between border-Outline-gray rounded-2xl p-4 hover:bg-Primary-White duration-300 hover:shadow-2xl hover:-translate-y-1 ease-in-out">
    <div>
      <div className="mb-2">
        <h2 className="text-xs  text-Primary-White font-medium inline-block bg-gradient-to-r from-Primary-Purple to-Primary-Blue py-px px-4 rounded-2xl">{category}</h2>
      </div>
      <h1 className="text-Text-Black text-base font-medium mb-3 line-clamp-3">{title}</h1>
    </div>

    <div>
      <p className="text-Text-Black text-sm mb-1">📍 {area}</p>
      <div className="flex justify-end w-full">
        <p className="text-Text-Black text-xs self-end mb-3">{formatTimeAgo(createdAt)}</p>
      </div>
    <Link to={`https://wa.me/${userData.contact}`}>
      <button className="btn md:btn-sm w-full mt-4 bg-Primary-Blue border-0 text-Primary-White hover:bg-Primary-Purple active:bg-opacity-75 duration-300 ease-in-out">
        Ambil Tawaran <Icon icon="mingcute:whatsapp-line" />
      </button>
    </Link>
    </div>
  </div>
  )
}

export default CardAntarJemput