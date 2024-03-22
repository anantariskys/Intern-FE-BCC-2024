import React from "react";

const FAQ = () => {

    const faq = [
        {
            title: "Bagaimana cara mulai berjualan barang preloved?",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis cupiditate excepturi delectus laborum earum aspernatur eligendi nostrum laudantium!" 
        },
        {
            title: "Bagaimana cara mulai berjualan barang preloved?",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque" 
        },
        {
            title: "Bagaimana membuat postingan di Komunitas?",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis cupiditate excepturi " 
        },
        {
            title: "Bagaimana membuat postingan di Komunitas?",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis cupiditate excepturi delectus laborum earum aspernatur eligendi !" 
        },
        {
            title: "Bagaimana cara memilih filter?",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis cupiditate excepturi delectus laborum earum aspernatur " 
        },
        {
            title: "Bagaimana cara memilih filter?",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis cupiditate excepturi delectus laborum " 
        },
    ]

  return (
    <div className="bg-Primary-LightBlue w-full p-4 lg:px-24 lg:gap-8 font-Poppins">
      <h2 className="text-lg font-semibold bg-Secondary-LightYellow mb-4 inline-block text-Text-Black bg-opacity-50 py-1 px-3 rounded-2xl">🧐 Frequently Asked Question</h2>
      <section className="w-full flex flex-col gap-4">
        {
            faq.map((item,index)=>(
        <div key={index} className="collapse collapse-arrow border border-Outline-gray">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-sm text-Text-Black font-semibold">{item.title}</div>
          <div className="collapse-content text-sm text-Text-Black">
            <p>{item.desc}</p>
          </div>
        </div>

            ))
        }
       
      </section>
    </div>
  );
};

export default FAQ;
