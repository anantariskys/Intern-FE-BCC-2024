import React from "react";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="w-full py-9 flex gap-9 flex-col justify-center font-Poppins  bg-Primary-Blue ">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-sm bg-Primary-White bg-opacity-40 py-1 font-bold px-3 text-Text-Black  rounded-2xl">🧑‍💻 Butuh bantuan?</h3>
        <button className="px-4 py-2 btn text-base hover:bg-Secondary-LightTeal border-0 duration-300 ease-in-out active:bg-Secondary-LightTeal bg-Primary-White text-Primary-Blue">Hubungi customer service</button>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h5 className="font-semibold text-base text-Primary-LightBlue">Fitur kami</h5>
        <ul className="flex flex-col items-center gap-3">
          <FooterList to={"/preloved"}>Temu Preloved</FooterList>
          <FooterList to={"/antarJemput"}>Antar Jemput</FooterList>
          <FooterList to={"/tukarJasa"}>Tukar Jasa</FooterList>
          <FooterList to={"/komunitas"}>Komunitas BRAW!</FooterList>
        </ul>
      </div>
      <hr className="text-Primary-LightBlue w-4/5 mx-auto" />
      <h2 className="text-sm font-medium text-Primary-LightBlue mx-auto">Copyright © 2023 BRAW!</h2>
    </footer>
  );
};

export default Footer;
