import React from 'react'

import Navbar from './Navbar/Navbar'

import headerBurger from '../../assets/header-burger.png'
import headerPrice from '../../assets/price.png'

const Header = () => {
  return (
    <header className="bg-header-background">
      <Navbar />
      <div className="grid grid-cols-5">
        <div className="p-7 mt-28 ml-4 col-span-2">
          <p className="border-2 border-dashed border-yellow-900 font-semibold mb-1.5 w-full p-2.5">
            IT'S A GOOD TIME FOR THE GREATE TASTE OF BURGER
          </p>
          <h1 className="text-8xl font-bold">BURGER</h1>
          <h3 className="text-6xl font-bold">WEEK</h3>
        </div>
        <div className="-mt-24 pb-16 col-span-3">
          <img className="relative -mt-3 mr-5" src={headerBurger} alt="img" />
          <img
            className="absolute top-3/4 left-2/4"
            src={headerPrice}
            alt="img"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
