import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function DropdownSelect({children,placeHolder,option,}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full mb-3 font-Poppins">
      <p className="text-sm font-semibold text-blue-500 mb-3">{children}</p>
      <div className="dropdown w-full">
        <button
          type="button"
          className="mb-1 flex items-center justify-between input w-full input-bordered bg-transparent text-xs text-Text-Placeholder"
          onClick={handleToggle}
        >
          {selectedOption || placeHolder} 
          <span>
           <Icon icon="ep:arrow-up-bold" className={`${isOpen?'rotate-0':'rotate-180'} duration-150 ease-in-out`}/>
            </span> 

        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } origin-top-right absolute right-0 mt-1 w-full rounded-lg shadow-lg bg-Primary-White z-10`}
        >
          <ul
         
            role="menu"
          >
            {option.map((option, index) => (
              <li
                key={index}
                className="cursor-pointer  py-3 px-4 text-sm font-medium text-Text-Black bg-Primary-White rounded-lg "
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownSelect;
