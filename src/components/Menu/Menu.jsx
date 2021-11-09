import React from 'react'

import Features from './Features/Features'
import Foods from './Foods/Foods'

const foods = [
  {
    id: 1,
    title: 'Burger1',
    description: 'Lorem ipsum is placeholder text commonly used',
    image: '/src/assets/menu-foods-1.png',
  },
  {
    id: 2,
    title: 'Burger2',
    description: 'Lorem ipsum is placeholder text commonly used',
    image: '/src/assets/menu-foods-2.png',
  },
  {
    id: 3,
    title: 'Burger3',
    description: 'Lorem ipsum is placeholder text commonly used',
    image: '/src/assets/menu-foods-1.png',
  },
]

const Menu = () => {
  return (
    <main className="p-4 space-y-14">
      <Features />
      <section className="flex flex-col items-center justify-center space-y-5">
        <p className="bg-yellow-400 p-2 w-52 text-center font-bold">
          ALWAYS TASTY BURGER
        </p>
        <h1 className="text-6xl font-black">CHOOSE & ENJOY</h1>
        <p className="text-gray-500 text-center w-4/5 font-semibold">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing.
        </p>
      </section>
      <Foods menu={foods} />
    </main>
  )
}

export default Menu
