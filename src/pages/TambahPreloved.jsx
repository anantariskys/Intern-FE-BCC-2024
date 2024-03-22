import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoGoggle from "../../public/logoGoggle.png";
import { getProfile } from "../api/services/auth";
import { createPreloved } from "../api/services/preloved";
import DropdownSelect from "../components/DropdownSelect";
import InputField from "../components/InputField";

const TambahPreloved = () => {
  const [input, setInput] = useState({
    Title: "",
    Category: "",
    Price: "",
    Condition: "",
    Description: "",
    IdUser: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await getProfile();

        setInput((prevInput) => ({
          ...prevInput,
          IdUser: response.idUser,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataUser();
  }, []);

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

  const handleConditionSelect = (condition) => {
    setInput((prevInput) => ({
      ...prevInput,
      Condition: condition,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addPreloved();
  };

  const addPreloved = async () => {
    try {
      const response = await createPreloved(input);
      navigate("/preloved");
    } catch (error) {
      console.log(error);
    }
  };

  const kategori = ["Pendidikan", "Fashion", "Perlengkapan Kos", "Gadget & Elektronik", "Hobi"];
  const kondisi = [">90%", "88%-95%", "80%-87%", "70%-79%", "<70%"];

  return (
    <div className="bg-Primary-LightBlue font-Poppins w-full py-6 flex flex-col  px-4">
      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full md:w-3/5 md:mx-auto  justify-between ">
        <h2 className="text-Primary-Blue font-semibold text-2xl w-3/4 mb-8">Tambah Barang Prelovedmu</h2>
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

          <InputField type={"text"} name={"Title"} labelSize={"text-base font-semibold"} mb={"mb-8"} onChange={handleChange} placeholder={"cth. Macbook Air"}>
            Nama Produk
          </InputField>
          <div className={`form-control mb-8 `}>
            <label className="label ">
              <span className={`label-text text-Primary-Blue  font-medium`}>Deskripsi</span>
            </label>
            <textarea onChange={handleChange} name="Description" className="textarea textarea-bordered bg-transparent text-xs  h-48 text-Text-Black" placeholder="Tambah deskripsi barangmu disini..."></textarea>
          </div>
          <p className="text-base font-semibold text-Primary-Blue mb-3">Detail</p>
          <DropdownSelect placeHolder={"Pilih Kategori"} onSelect={handleCategorySelect} option={kategori}>
            Kategori
          </DropdownSelect>
          <DropdownSelect placeHolder={"Pilih Kondisi"} onSelect={handleConditionSelect} option={kondisi}>
            Kondisi
          </DropdownSelect>
          <InputField type={"text"} name={"Alamat"} labelSize={"font-semibold"} mb={"mb-8"} placeholder={"Jl. Sigura gura V Blok H1 No.3, Lowokwaru, Malang"}>
            Alamat Lengkap
          </InputField>
          <InputField type={"number"} name={"Price"} labelSize={"text-base font-semibold"} mb={"mb-8"} onChange={handleChange} placeholder={"Rp 0.00"}>
            Harga
          </InputField>
        </section>

        <button type="submit" className="btn w-full bg-Primary-Blue active:bg-opacity-75 border-0 text-Primary-LightBlue py-2 self-center justify-self-end mb-4  px-12  text-base font-semibold  hover:bg-Primary-Purple duration-300 ease-in-out">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default TambahPreloved;
