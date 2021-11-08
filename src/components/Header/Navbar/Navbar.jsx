import React from 'react'

import logo from '../../../assets/logo.png'
import contactIcon from '../../../assets/nav-icon.png'

const Navbar = () => {
  return (
    <nav className="grid grid-cols-2">
      <div className="flex items-center row-span-2 ml-4">
        <img src={logo} alt="img" className="ml-7 w-1/4" />
      </div>
      <div className="flex items-center justify-end p-5 space-x-3 mr-6 mt-2">
        <img src={contactIcon} alt="contact-icon" />
        <p className="font-bold">EXPRESS DELIVERY +1 234 567 890</p>
      </div>
      <div className="flex items-center justify-end">
        <ul className="flex items-center justify-between w-3/5 mr-11 font-bold">
          <li>HOME</li>
          <li>MENU</li>
          <li>OUR STORY</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
