import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoGoggle from "../../public/logoGoggle.png";
import InputField from "../components/InputField";

const Register = () => {
  const [input, setInput] = useState({
    Name: "",
    Username: "",
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({
    Name: "",
    Username: "",
    Email: "",
    Password: "",
  });
  const navigate = useNavigate()

  const [isValid,setIsValid] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const register =async()=>{
    try {
      const response = await axios.post('http://localhost:8080/api/v1/register',input)
      console.log(response)
      navigate('/login')
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    setIsValid(true)
    e.preventDefault();
    if (!input.Email.endsWith("@ub.ac.id")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Email harus menggunakan domain @ub.ac.id",
      }));
      setIsValid(false)
    }
    if (input.Username.length <= 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Username: "Username harus lebih dari 6 karakter",
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
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(input.Password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Password: "Password harus kompleks",
      }));
      setIsValid(false)
    }

    if (isValid) {
      register()
    }
    

   
  };

  return (
    <div className="bg-Primary-LightBlue font-Poppins h-screen w-full py-6 flex flex-col px-4">
      <form onSubmit={handleSubmit} className="flex flex-col h-full justify-center  ">
        <h2 className="text-Primary-Blue font-semibold text-2xl  ">Buat Akun dulu yuk!</h2>
        <p className="text-sm text-Text-Black w-3/4 mb-5">Biar kamu bisa gunain semua fitur yang ada di BRAW!</p>
        <section>
          <InputField type={"text"} name={"fullName"} value={input.fullName} onChange={handleChange} placeholder={"cth. Muhammad Dahlan"} error={errors.fullName}>
            Nama Lengkap
          </InputField>
          <InputField type={"text"} name={"username"} value={input.username} onChange={handleChange} placeholder={"Dahlan123"} error={errors.username}>
            Username
          </InputField>
          <InputField type={"email"} name={"email"} value={input.email} onChange={handleChange} placeholder={"dahlan@student.ub.ac.id (Emaill UB)"} error={errors.email}>
            Email UB
          </InputField>
          <InputField type={"password"} name={"password"} value={input.password} onChange={handleChange} placeholder={"masukkan kata sandi"} error={errors.password}>
            Kata Sandi
          </InputField>

          <div className="flex w-2/4 gap-2 mx-auto items-center">
            <hr className="border-Text-Placeholder w-full" />
            <p>atau</p>
            <hr className="border-Text-Placeholder w-full" />
          </div>
          <img src={logoGoggle} draggable="false" loading="lazy" className="mx-auto w-1/6 aspect-auto mb-5 mt-2" />
        </section>

        <div className="  w-full flex flex-col items-center">
          <button type="submit" className="btn bg-Primary-Blue  text-Primary-White py-2 self-center mb-3  px-12 w-1/2 text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
            Daftar
          </button>
          <p className="text-base text-Text-Black mx-auto">
            Sudah punya akun?<Link to={'/login'}><span className="text-Primary-Blue">Masuk.</span></Link> 
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
