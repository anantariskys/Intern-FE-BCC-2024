import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
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
    Images: [],
  });
  
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


  console.log(input)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    
    try {
      const response = await createPreloved(input);
      document.getElementById("my_modal_1").showModal()
      setTimeout(() => {
        navigate('/preloved')
      }, 4000);

    } catch (error) {
      console.log(error);
    }
  };

  const kategori = ["Pendidikan", "Fashion", "Perlengkapan Kos", "Gadget & Elektronik", "Hobi"];
  const kondisi = [">90%", "88%-95%", "80%-87%", "70%-79%", "<70%"];

  return (
    <div className="bg-Primary-LightBlue font-Poppins w-full py-6 flex flex-col  px-4">
       <dialog id="my_modal_1" className="modal ">
        <div className="modal-box  bg-Primary-LightBlue aspect-square w-80 flex justify-center items-center flex-col gap-8 p-4">
          <Icon icon={"mingcute:checkbox-line"} className="text-Primary-Blue text-8xl"/>
          <h3 className="font-semibold text-2xl text-Primary-Blue text-center">Selamat! Barang anda telah ditambahkan</h3>
          <div className="modal-action flex w-full gap-4  justify-center">
            <Link to={'/profile/post'}>
              <button className="btn md:btn-sm border-0 bg-Primary-Blue text-base font-semibold hover:bg-Primary-Purple duration-300 ease-in-out active:bg-opacity-75 text-Primary-LightBlue w-full">Lihat Postingan Saya</button>
              </Link>
           
          </div>
        </div>
      </dialog>
      
      <form onSubmit={handleSubmit} action="" className="flex flex-col h-full md:w-3/5 md:mx-auto  justify-between ">
        <h2 className="text-Primary-Blue font-semibold text-2xl w-3/4 mb-8">Tambah Barang Prelovedmu</h2>
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
