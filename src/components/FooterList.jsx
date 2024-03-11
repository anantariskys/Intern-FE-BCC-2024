import React from 'react'
import { Link } from 'react-router-dom'

const FooterList = ({children,to}) => {
  return (
    <Link to={to}>
        <li className='text-sm text-Primary-LightBlue font-normal hover:underline-offset-1 hover:underline'>{children}</li>
    </Link>
  )
}

export default FooterList