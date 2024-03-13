import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoGoggle from '../../public/logoGoggle.png'
import InputField from '../components/InputField';

const Verifikasi = () => {
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({

    Email: "",
    Password: "",
  });

  const [isValid, setIsValid] = useState(true)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reset()
    
  
    if (!input.Email.endsWith("@ub.ac.id")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Email harus menggunakan domain @ub.ac.id",
      }));
      setIsValid(false)
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(input.Password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Password: "Password harus kompleks",
      }));
      setIsValid(false)
    }
    if (input.Password.length <= 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Username: "Password harus lebih dari 8 karakter",
      }));
      setIsValid(false)
    }

    if (isValid) {
      login()
    }



  }

  const reset = ()=>{
    setIsValid(true)
    setInput({
      Email: "",
    Password: "",
    })
    setErrors({
      Email: "",
    Password: "",
    })
    
  }
  const login =async()=>{
    try {
      const response = await axios.post('http://localhost:8080/api/v1/login',input)
      window.localStorage.setItem('token',response.data.data.token)
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  }

    
   
  return (
    <div className="bg-Primary-LightBlue font-Poppins h-screen w-full py-6 flex flex-col px-4">

      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full justify-between ">
      <div>
      <h2 className="text-Primary-Blue font-semibold text-2xl font-Poppins  ">Lengkapi alamat</h2>
      <p className="text-sm text-Text-Black font-Poppins w-3/4 mb-5">Sebelum membeli atau menjual produk, isi biodata dan alamat kamu dulu yuk!</p>
        <section>
        <InputField type={"number"} name={"Email"} value={input.Email} onChange={handleChange} placeholder={"0821xxxxxxxx"} error={errors.Email}>
            Nomor Telepon
          </InputField>
          <InputField type={"text"} name={"Password"} value={input.Password} onChange={handleChange} placeholder={"Jl. Sigura gura V Blok H1 No.3, Lowokwaru, Malang"} error={errors.Password}>
            Alamat Lengkap
          </InputField>
          <InputField type={"text"} name={"Password"} value={input.Password} onChange={handleChange} placeholder={"cth. blok atau patokan"} error={errors.Password}>
            Detail Lainnya  (opsional)
          </InputField>
        </section>
      </div>

       <button type="submit" className="btn bg-Primary-Blue font-Poppins border-0 active:bg-opacity-75 text-Primary-LightBlue py-2 self-center justify-self-end mb-4  px-12  text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
          Simpan Alamat
        </button>
       
      </form>
    </div>
  )
}

export default Verifikasi