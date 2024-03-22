import { Icon } from "@iconify/react";
import React, { useState } from "react";

const DropdownCheckbox = ({ option, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleCheckboxChange = (opt) => {
      const updatedOptions = selectedOptions.includes(opt)
        ? selectedOptions.filter((item) => item !== opt)
        : [...selectedOptions, opt];
      setSelectedOptions(updatedOptions);
      onSelect(updatedOptions);
    };
  
    return (
      <div className="relative">
        <div
          onClick={handleToggle}
          className="h-full aspect-square relative bg-Primary-Blue hover:bg-Primary-Purple duration-300 ease-in-out active:bg-opacity-75 rounded-lg w-9 flex justify-center items-center"
        >
          <Icon icon="mingcute:settings-6-line" className="text-Primary-LightBlue text-lg" />
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} origin-top-right absolute right-0 mt-1  p-5  rounded-2xl shadow-lg bg-Primary-White z-50`}
        >
          <div className="w-full flex justify-between mb-4">
            <div className="text-base py-1 rounded-lg px-3 border border-Outline-gray text-Text-Black cursor-pointer">Clear</div>
            <div className="text-base py-1 rounded-lg px-3 font-semibold text-Text-Black">Filter</div>
            <div className="text-base py-1 rounded-lg px-3 text-Primary-White hover:bg-Primary-Purple duration-300 ease-in-out active:bg-opacity-75 cursor-pointer bg-Primary-Blue">Done</div>
          </div>
          <ul role="menu">
            {option.map((opt) => (
              <div className="p-1" key={opt}>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(opt)}
                    onChange={() => handleCheckboxChange(opt)}
                    className="checkbox [--chkbg:#3375F1] "
                  />
                  <p className="font-medium text-base text-Text-Black">{opt}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

export default DropdownCheckbox;
