import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPrelovedById } from "../api/services/preloved";

import CardDetail from "../components/CardDetail";

const dummy = {

  photo: ["https://source.unsplash.com/random/900x700/?book", "https://source.unsplash.com/random/900x700/?books"],

};

const PrelovedDetail = () => {
  const [data, setData] = useState([]);
  

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const response = await getPrelovedById(id)
        setData(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, []);

  return (
    <div className="bg-Primary-LightBlue">
      <main className="w-full md:px-56 md:py-28 p-4  font-Poppins">
        <CardDetail desc={data.description} userId={data.idUser} nama={data.title}  price={data.price} photo={dummy.photo} kategori={data.category} kondisi={data.condition} />
      </main>
    </div>
  );
};

export default PrelovedDetail;
