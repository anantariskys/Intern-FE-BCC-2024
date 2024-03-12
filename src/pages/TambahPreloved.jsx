import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoGoggle from "../../public/logoGoggle.png";
import InputField from "../components/InputField";

const TambahPreloved = () => {
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({
    Email: "",
    Password: "",
  });

  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();

    if (!input.Email.endsWith("@ub.ac.id")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Email harus menggunakan domain @ub.ac.id",
      }));
      setIsValid(false);
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(input.Password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Password: "Password harus kompleks",
      }));
      setIsValid(false);
    }
    if (input.Password.length <= 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Username: "Password harus lebih dari 8 karakter",
      }));
      setIsValid(false);
    }

    if (isValid) {
      login();
    }
  };

  const reset = () => {
    setIsValid(true);
    setInput({
      Email: "",
      Password: "",
    });
    setErrors({
      Email: "",
      Password: "",
    });
  };
  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/login", input);
      window.localStorage.setItem("token", response.data.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-Primary-LightBlue font-Poppins w-full py-6 flex flex-col  px-4">
      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full  justify-between ">
        <h2 className="text-Primary-Blue font-semibold text-2xl w-3/4 mb-8">Tambah Barang Prelovedmu</h2>
        <section>
          <p className="text-base font-semibold text-Primary-Blue mb-3">Foto</p>
          <div className="flex mb-8 items-center justify-between flex-wrap gap-y-3 w-full">
            <label for="dropzone-file" className="flex flex-col items-center justify-center w-[31%] aspect-square rounded-lg cursor-pointer bg-Primary-White ">
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

          <InputField type={"text"} name={"Email"} labelSize={"text-base font-semibold"} mb={"mb-8"} value={input.Email} onChange={handleChange} placeholder={"cth. Macbook Air"} error={errors.Email}>
            Nama Produk
          </InputField>
          <InputField type={"text"} name={"Password"} mb="mb-8" labelSize={"text-sm font-semibold"} className={"h-48"} value={input.Password} onChange={handleChange} placeholder={"masukkan kata sandi"} error={errors.Password}>
            Deskripsi
          </InputField>
          <p className="text-base font-semibold text-Primary-Blue mb-3">Detail</p>
          <p className="text-sm font-semibold text-Primary-Blue mb-3">Kategori</p>
          <details >
      <summary className="menu bg-base-200 w-56 rounded-box">Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
        </section>

        <button type="submit" className="btn bg-Primary-Blue active:bg-opacity-75 text-Primary-LightBlue py-2 self-center justify-self-end mb-4  px-12  text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
          Simpan Alamat
        </button>
      </form>
    </div>
  );
};

export default TambahPreloved;
