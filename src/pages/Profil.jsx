import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div className="bg-Primary-LightBlue p-4 font-Poppins flex flex-col gap-8">
      <section className="flex flex-col justify-center items-center gap-3">
        <img src="https://source.unsplash.com/random/900×700/?profile" className="w-32 bg-Primary-Blue aspect-square object-cover rounded-full" alt="profile-image" loading="lazy" />
        <h3 className=" font-medium text-sm text-Text-Black">Muhammad Dahlan</h3>
        <Link to={"/profile/edit"}>
          <p className="text-xs text-Primary-Blue">Edit Profil</p>
        </Link>
      </section>
      <section className="w-full p-4 flex-col flex gap-4 border border-Outline-gray rounded-2xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Icon className="text-2xl text-Primary-Blue" icon="mingcute:user-2-fill" />
            <h5 className="text-xs text-Primary-Blue">Username</h5>
          </div>
          <p className="text-sm text-Text-Black">muhdahlan21</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Icon className="text-2xl text-Primary-Blue" icon="ic:baseline-email" />
            <h5 className="text-xs text-Primary-Blue">Email</h5>
          </div>
          <p className="text-sm text-Text-Black">dahlan@student.ub.ac.id</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Icon className="text-2xl text-Primary-Blue" icon="ic:baseline-whatsapp" />
            <h5 className="text-xs text-Primary-Blue">Telp</h5>
          </div>
          <p className="text-sm text-Text-Black">082165439856</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Icon className="text-2xl text-Primary-Blue" icon="ion:location" />
            <h5 className="text-xs text-Primary-Blue">Lokasi</h5>
          </div>
          <p className="text-sm text-Text-Black">Merjosari. Lowokwaru</p>
        </div>
      </section>
      <section className="w-full p-4 flex-col flex gap-4 border border-Outline-gray rounded-2xl">
        <h3 className="text-sm text-Primary-Blue font-medium">Notifikasi</h3>
        <div className="flex gap-4 items-center justify-start">
          <div className="w-6 aspect-square">
            <Icon className="text-Primary-Blue text-2xl" icon="iconamoon:notification-fill" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[0.625rem]">Admin telah menghapus postingan anda karena telah melanggar user guideline</p>
            <div className="flex gap-4">
              <p className="text-[0.625rem] font-medium">12/04/24</p>
              <p className="text-[0.625rem] font-medium">20.54</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start">
          <div className="w-6 aspect-square">
            <Icon className="text-Primary-Blue text-2xl" icon="iconamoon:notification-fill" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[0.625rem]">Produk anda berhasil ditambahkan ke etalase Temu Preloved</p>
            <div className="flex gap-4">
              <p className="text-[0.625rem] font-medium">12/04/24</p>
              <p className="text-[0.625rem] font-medium">20.54</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start">
          <div className="w-6 aspect-square">
            <Icon className="text-Primary-Blue text-2xl" icon="iconamoon:notification-fill" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[0.625rem]">Produk anda berhasil diboosting</p>
            <div className="flex gap-4">
              <p className="text-[0.625rem] font-medium">12/04/24</p>
              <p className="text-[0.625rem] font-medium">20.54</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-4">
        <button className="text-[0.625rem] btn w-full  justify-between  bg-Primary-Blue hover:bg-Primary-Purple active:bg-opacity-75 ease-in-out duration-200   text-Primary-White">
          <div className="flex  gap-4 items-center">
            <Icon icon="gg:list" className="text-xl" />
            <p className="text-Primary-LightBlue text-sm">Postingan Saya</p>
          </div>

          <div>
            <Icon icon="ooui:next-ltr" className="text-xl" />
          </div>
        </button>
        <button className="text-[0.625rem] btn w-full  justify-between  bg-Primary-Blue hover:bg-Primary-Purple active:bg-opacity-75 ease-in-out duration-200   text-Primary-White">
          <div className="flex  gap-4 items-center">
            <Icon icon="gg:list" className="text-xl" />
            <p className="text-Primary-LightBlue text-sm">Frequently Asked Question</p>
          </div>

          <div>
            <Icon icon="ooui:next-ltr" className="text-xl" />
          </div>
        </button>
        <button className="text-[0.625rem] btn w-full  justify-between  bg-Primary-Blue hover:bg-Primary-Purple active:bg-opacity-75 ease-in-out duration-200   text-Primary-White">
          <div className="flex  gap-4 items-center">
            <Icon icon="gg:list" className="text-xl" />
            <p className="text-Primary-LightBlue text-sm">Logout</p>
          </div>

          <div>
            <Icon icon="ooui:next-ltr" className="text-xl" />
          </div>
        </button>
      </section>
    </div>
  );
};

export default Profil;
