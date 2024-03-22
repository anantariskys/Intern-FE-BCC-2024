import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { getProfile } from "../api/services/auth";
import { createJasaAntar } from "../api/services/jasaAntar";
import { createJastip } from "../api/services/jastip";
import DropdownSelect from "../components/DropdownSelect";
import InputField from "../components/InputField";

const TambahAntarJemput = () => {
  const [input, setInput] = useState({
    Title: "",
    Category: "",
    Area: "",
    idUser: "",
  });

  const navigate = useNavigate()


  useEffect(() => {
    const fetchDataUser =async()=>{
      try {
      
        const response = await getProfile()
        setInput((prevInput) => ({
          ...prevInput,
          idUser: response.idUser,
        }));
      
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataUser()

  }, [])
  
  

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category) => {
    setInput((prevInput) => ({
      ...prevInput,
      Category: category,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(input)
  


    addJastip()

   
  };

 
  const addJastip = async () => {
    try {
      await createJasaAntar(input)
      navigate("/antarJemput");
    } catch (error) {
      console.log(error);
    }
  };
  
  const kategori =[
    "Antar Jemput","Antar Barang"
  ]
 

  return (
    <div className="bg-Primary-LightBlue font-Poppins w-full py-6 flex flex-col  px-4">
      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full md:w-3/5  md:mx-auto justify-between ">
        <h2 className="text-Primary-Blue font-semibold text-2xl w-3/4 mb-8">Tambah Jastip</h2>
        <section>
          <p className="text-base font-semibold text-Primary-Blue mb-3">Foto</p>
          <div className="flex mb-8 items-center justify-between flex-wrap gap-y-3 w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[31%] aspect-square rounded-lg cursor-pointer bg-Primary-White ">
              <div className="flex flex-col items-center justify-center ">
                <Icon icon="majesticons:camera-line" className="text-3xl " />
                <p className="text-[0.625rem] text-Text-Placeholder">Tambah Foto</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <div className="w-[31%] aspect-square object-cover border border-Outline-gray rounded-lg"></div>
            <div className="w-[31%] aspect-square object-cover border border-Outline-gray rounded-lg"></div>
            <div className="w-[31%] aspect-square object-cover border border-Outline-gray rounded-lg"></div>
            <div className="w-[31%] aspect-square object-cover border border-Outline-gray rounded-lg"></div>
            <div className="w-[31%] aspect-square object-cover border border-Outline-gray rounded-lg"></div>
          </div>

          <InputField type={"text"} name={"Title"} labelSize={"text-base font-semibold"} mb={"mb-8"}  onChange={handleChange} placeholder={"cth. Ada yang bisa anterin aku? "} >
           Judul
          </InputField>
        
          <p className="text-base font-semibold text-Primary-Blue mb-3">Detail</p>
          <DropdownSelect placeHolder={'Pilih Kategori'} onSelect={handleCategorySelect} option={kategori}>Kategori</DropdownSelect>
          
          <InputField type={"text"} name={"Area"} labelSize={"font-semibold"} onChange={handleChange}  mb={"mb-8"} placeholder={"Senin - Jumat"} >
            Area
          </InputField>
        
        </section>

        <button type="submit" className="btn w-full bg-Primary-Blue active:bg-opacity-75 border-0 text-Primary-LightBlue py-2 self-center justify-self-end mb-4  px-12  text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default TambahAntarJemput;
