import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoGoggle from '../../public/logoGoggle.png'
import { updateProfile } from '../api/services/auth';
import InputField from '../components/InputField';
import { useAuth } from '../hooks/useAuth';

const Verifikasi = () => {
  const [input, setInput] = useState({
    alamat: "",
    contact: "",
  });
  const navigate = useNavigate()
  const {userData} = useAuth()



 




  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!input.contact.startsWith(+62)) {
      setInput((prevInput) => ({
        ...prevInput,
        error: "Nomor telepon harus dimulai dengan +62",
      }));
      return;
    }
  

    update();
  };

  const update = async () => {
    try {
      const response = await updateProfile(userData.idUser,input);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

 




    
   
  return (
    <div className="bg-Primary-LightBlue font-Poppins h-screen w-full py-6 flex flex-col px-4">

      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full justify-between mx-auto max-w-sm ">
      <div>
      <h2 className="text-Primary-Blue font-semibold text-2xl font-Poppins  ">Lengkapi alamat</h2>
      <p className="text-sm text-Text-Black font-Poppins w-3/4 mb-5">Sebelum membeli atau menjual produk, isi biodata dan alamat kamu dulu yuk!</p>
        <section>
        <InputField type={"number"} name={"contact"} value={input.contact} onChange={handleChange} placeholder={"+62821xxxxxxxx"}  error={input.error} >
            Nomor Telepon
          </InputField>
          <InputField type={"text"} name={"alamat"} value={input.alamat} onChange={handleChange} placeholder={"Jl. Sigura gura V Blok H1 No.3, Lowokwaru, Malang"}>
            Alamat Lengkap
          </InputField>
          <InputField type={"text"} name={"detail"} value={input.detail} onChange={handleChange} placeholder={"cth. blok atau patokan"} >
            Detail Lainnya  (opsional)
          </InputField>
        </section>
      </div>

       <button type="submit" className="btn w-full bg-Primary-Blue font-Poppins border-0 active:bg-opacity-75 text-Primary-LightBlue py-2 self-center justify-self-end mb-4  px-12  text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
          Simpan Alamat
        </button>
       
      </form>
    </div>
  )
}

export default Verifikasi