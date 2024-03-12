import React from 'react'

const InputField = ({type,name,value,onChange,placeholder,className,children,error, labelSize = "text-xs",mb="mb-3"}) => {
  return (
    <div className={`form-control ${mb}`}>
        <label className="label ">
            <span className={`label-text text-Primary-Blue ${labelSize} font-medium`}>
                {children}
            </span>
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className} input input-bordered ${error?'border-red-500':''} bg-transparent`}
            required
        />
        {
            error&&<small className='text-red-500'>{error}</small>
        }
    </div>
  )
}

export default InputField