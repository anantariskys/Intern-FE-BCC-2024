import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoGoggle from "../../public/logoGoggle.png";
import DropdownSelect from "../components/DropdownSelect";
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
  
  const kategori =[
    "Pendidikan","Fashion","Perlengkapan Kos","Gadget","Hobi"
  ]
  const kondisi =[
    ">90%","88%-95%","80%-87%","70%-79%","<70%"
  ]

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

          <InputField type={"text"} name={"Email"} labelSize={"text-base font-semibold"} mb={"mb-8"}  onChange={handleChange} placeholder={"cth. Macbook Air"} error={errors.Email}>
            Nama Produk
          </InputField>
          <div className={`form-control mb-8 `}>
        <label className="label ">
            <span className={`label-text text-Primary-Blue  font-medium`}>
                Deskripsi
            </span>
        </label>
        <textarea className="textarea textarea-bordered bg-transparent text-xs  h-48 text-Text-Placeholder" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"></textarea>
    </div>
          <p className="text-base font-semibold text-Primary-Blue mb-3">Detail</p>
          <DropdownSelect placeHolder={'Pilih Kategori'} option={kategori}>Kategori</DropdownSelect>
          <DropdownSelect placeHolder={'Pilih Kondisi'} option={kondisi}>Kondisi</DropdownSelect>
          <InputField type={"text"} name={"Email"} labelSize={"font-semibold"} mb={"mb-8"} onChange={handleChange} placeholder={"Jl. Sigura gura V Blok H1 No.3, Lowokwaru, Malang"} error={errors.Email}>
            Alamat Lengkap
          </InputField>
          <InputField type={"text"} name={"Email"} labelSize={"text-base font-semibold"} mb={"mb-8"}  onChange={handleChange} placeholder={"Rp 0.00"} error={errors.Email}>
            Harga
          </InputField>
        </section>

        <button type="submit" className="btn bg-Primary-Blue active:bg-opacity-75 text-Primary-LightBlue py-2 self-center justify-self-end mb-4  px-12  text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default TambahPreloved;
