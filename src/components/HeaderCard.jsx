import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCard = ({message,btnText,to}) => {
  return (
    <section className="w-full bg-gradient-to-r gap-6 flex flex-col rounded-2xl p-4 to-Primary-Blue from-Primary-Purple">
        <div className="flex gap-4 items-center">
          <p className="text-3xl aspect-square p-2 bg-Secondary-LightYellow bg-opacity-50 rounded-full">🤗</p>
          <p className="text-base font-medium text-Primary-LightBlue">{message}</p>
        </div>
        <div className="w-full flex justify-end">
          <Link to={to}>
            <button className="px-4 py-2 btn text-base border-0 font-semibold bg-Primary-White duration-300 ease-in-out hover:bg-Secondary-LightTeal text-Primary-Blue">{btnText}</button>
          </Link>
        </div>
      </section>
  )
}

export default HeaderCard