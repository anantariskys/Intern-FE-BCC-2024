import React from 'react'

const InputField = ({type,name,value,onChange,placeholder,className,children,error}) => {
  return (
    <div className="form-control mb-3">
        <label className="label ">
            <span className="label-text text-Primary-Blue text-xs font-medium">
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