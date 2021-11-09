import React from 'react'

import logo from '../../assets/footer-logo.png'
import location from '../../assets/location.png'
import email from '../../assets/Email.png'
import instagram from '../../assets/Instagram.png'
import facebook from '../../assets/Facebook.png'
import twitter from '../../assets/Twitter.png'
import whatsapp from '../../assets/WhatsApp.png'

const Footer = () => {
  return (
    <footer className="p-8 -mt-10">
      <div className="w-full bg-footer-background h-96 bg-no-repeat bg-cover bg-center p-4">
        <div className="grid grid-cols-2 h-full">
          <div className="flex items-center col-span-2 mr-6">
            <img src={logo} alt="img" className="ml-7 w-80" />
          </div>
          <p className="text-base text-white p-8 -mt-4 w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.aliquip ex ea aliquip ex.
          </p>
          <div className=" flex flex-col justify-center items-start space-y-5 m-auto mt-4">
            <div className="flex items-center justify-end space-x-6">
              <img src={location} alt="contact-icon" />
              <p className="font-medium text-white">
                MAIN ROAD, BUILDING NAME, COUNTRY
              </p>
            </div>
            <div className="flex items-center justify-end space-x-6">
              <img src={email} alt="contact-icon" />
              <p className="font-medium text-white">INFO@COMPANYNAME.COM</p>
            </div>
          </div>
          <p className="flex items-center text-xs ml-8 text-white">
            COMPANY NAME 2020. ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center justify-end space-x-3 mr-6">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
