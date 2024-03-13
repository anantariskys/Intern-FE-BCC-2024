import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoGoggle from '../../public/logoGoggle.png'
import InputField from '../components/InputField';

const Login = () => {
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({

    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!input.Email.endsWith("@ub.ac.id")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Email harus menggunakan domain @ub.ac.id",
      }));
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&]{8,}$/;
    if (!passwordRegex.test(input.Password || input.Password.length <= 8)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Password: "Kata sandi setidaknya mengandung 1 Uppercase, 1 Lowercase, 1 Angka & Minimal 8 karakter",
      }));
      setIsValid(false)
    }
 

    if (isValid) {
      login()
    }


  }

    
   
  return (
    <div className="bg-Primary-LightBlue font-Poppins h-screen w-full py-6 flex flex-col px-4">

      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full justify-center ">
      <h2 className="text-Primary-Blue font-semibold text-2xl  ">Masuk dulu yuk!</h2>
      <p className="text-sm text-Text-Black w-3/4 mb-8">Biar kamu bisa gunain semua fitur yang ada di BRAW!</p>
        <section>
        <InputField type={"email"} name={"email"} value={input.email} onChange={handleChange} placeholder={"dahlan@student.ub.ac.id (Emaill UB)"} error={errors.email}>
            Email UB
          </InputField>
          <InputField type={"password"} name={"password"} value={input.password} onChange={handleChange} placeholder={"masukkan kata sandi"} error={errors.password}>
            Kata Sandi
          </InputField>
        <div className="flex w-2/4 gap-2 mx-auto items-center mt-8">
            <hr className="border-Text-Placeholder w-full" />
            <p>atau</p>
            <hr className="border-Text-Placeholder w-full" />
        </div>
        <img src={logoGoggle} draggable='false' loading="lazy" className="mx-auto w-1/6 aspect-auto mb-5 mt-4" />
        </section>

       <div className='"  w-full flex flex-col items-center'>
       <button type="submit" className="btn bg-Primary-Blue text-Primary-White py-2 self-center justify-self-end mb-4  px-12 w-1/2 text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
          Daftar
        </button>
        <p className="text-base text-Text-Black mx-auto">
          Belum punya akun?<Link to={'/register'}><span className="text-Primary-Blue font-bold"> Daftar.</span></Link>
        </p>
       </div>
      </form>
    </div>
  )
}

export default Login