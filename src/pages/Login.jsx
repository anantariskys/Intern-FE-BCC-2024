
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import logoGoggle from "../../public/logoGoggle.png";
import { login } from "../api/services/auth";
import InputField from "../components/InputField";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const{setIsAuthenticated} = useAuth()
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({
    Email: "",
    Password: "",
  });

  const [isValid, setIsValid] = useState(true);
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
    setIsValid(true)
  

    if (!input.Email.endsWith("ub.ac.id")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Email harus menggunakan domain ub.ac.id",
      }));
      setIsValid(false);
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&]{8,}$/;
    if (!passwordRegex.test(input.Password || input.Password.length <= 8)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Password: "Kata sandi setidaknya mengandung 1 Uppercase, 1 Lowercase, 1 Angka & Minimal 8 karakter",
      }));
      setIsValid(false);
    }

    if (isValid) {
      handleLogin();
    }
  };


  const handleLogin = async () => {
    try {
      await login(input);
      setIsAuthenticated(true)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-Primary-LightBlue font-Poppins h-screen w-full py-6 flex flex-col px-4">
      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full max-w-sm mx-auto justify-center ">
        <h2 className="text-Primary-Blue font-semibold text-2xl  ">Masuk dulu yuk!</h2>
        <p className="text-sm text-Text-Black w-3/4 mb-8">Biar kamu bisa gunain semua fitur yang ada di BRAW!</p>
        <section>
          <InputField type={"email"} name={"Email"} value={input.Email} onChange={handleChange} placeholder={"dahlan@student.ub.ac.id (Emaill UB)"} error={errors.Email}>
            Email UB
          </InputField>
          <InputField type={"password"} name={"Password"} value={input.Password} onChange={handleChange} placeholder={"masukkan kata sandi"} error={errors.Password}>
            Kata Sandi
          </InputField>
          <div className="flex w-2/4 gap-2 mx-auto items-center mt-8">
            <hr className=" border-Text-Black w-full" />
            <p className="text-Text-Black">atau</p>
            <hr className=" border-Text-Black w-full" />
          </div>
          <img src={logoGoggle} draggable="false" loading="lazy" className="mx-auto w-1/6 aspect-auto mb-5 mt-4" />
        </section>

        <div className='"  w-full flex flex-col items-center'>
          <button
            type="submit"
            className="btn w-full bg-Primary-Blue border-0 text-Primary-LightBlue py-2 self-center justify-self-end mb-4  active:bg-opacity-75 px-12 w-1/2 text-base font-semibold  hover:bg-Primary-Purple a duration-300 ease-in-out"
          >
            Login
          </button>
          <p className="text-base text-Text-Black mx-auto">
            Belum punya akun?
            <Link to={"/register"}>
              <span className="text-Primary-Blue font-bold"> Daftar.</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
