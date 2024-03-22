import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
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
    Images : []
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
  const [imagePreviews, setImagePreviews] = useState([]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setInput((prevInput) => ({
      ...prevInput,
      Images: files,
    }));

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews.slice(0, 5)); 
  };

 
  const addJastip = async () => {
    try {
      await createJasaAntar(input)
      document.getElementById("my_modal_1").showModal()
      setTimeout(() => {
        navigate('/antarJemput')
      }, 4000);

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
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box  bg-Primary-LightBlue aspect-square w-80 flex justify-center items-center flex-col gap-8 p-4">
          <Icon icon={"mingcute:checkbox-line"} className="text-Primary-Blue text-8xl"/>
          <h3 className="font-semibold text-2xl text-Primary-Blue text-center">Selamat! Antar Jemput anda telah ditambahkan</h3>
          <div className="modal-action flex w-full gap-4  justify-center">
            <Link to={'/profile/post'}>
              <button className="btn md:btn-sm border-0 bg-Primary-Blue text-base font-semibold hover:bg-Primary-Purple duration-300 ease-in-out active:bg-opacity-75 text-Primary-LightBlue w-full">Lihat Postingan Saya</button>
              </Link>
           
          </div>
        </div>
      </dialog>
        <h2 className="text-Primary-Blue font-semibold text-2xl w-3/4 mb-8">Tambah Antar Jemput</h2>
        <section>
          <p className="text-base font-semibold text-Primary-Blue mb-3">Foto</p>
          <div className="flex mb-8 items-center justify-between flex-wrap gap-y-3 w-full">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="w-[31%] aspect-square object-cover border border-Outline-gray rounded-lg" style={{ backgroundImage: `url(${preview})`,backgroundSize:'cover' }}></div>
            ))}
            {Array.from({ length: Math.max(0, 5 - imagePreviews.length) }).map((_, index) => (
              <div key={index} className="w-[31%] aspect-square object-cover border border-Outline-gray rounded-lg"></div>
            ))}
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[31%] aspect-square rounded-lg cursor-pointer bg-Primary-White ">
              <div className="flex flex-col items-center justify-center ">
                <Icon icon="majesticons:camera-line" className="text-3xl " />
                <p className="text-[0.625rem] text-Text-Placeholder">Tambah Foto</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} multiple accept="image/*" />
            </label>
          </div>

          <InputField type={"text"} name={"Title"} labelSize={"text-base font-semibold"} mb={"mb-8"}  onChange={handleChange} placeholder={"cth. Ada yang bisa anterin aku? "} >
           Judul
          </InputField>
        
          <p className="text-base font-semibold text-Primary-Blue mb-3">Detail</p>
          <DropdownSelect placeHolder={'Pilih Kategori'} onSelect={handleCategorySelect} option={kategori}>Kategori</DropdownSelect>
          
          <InputField type={"text"} name={"Area"} labelSize={"font-semibold"} onChange={handleChange}  mb={"mb-8"} placeholder={"cth. Jalan Sigura Gura"} >
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
