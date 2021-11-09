import React from 'react'

import aboutImage from '../../assets/about.png'

const About = () => {
  return (
    <section className="mt-20">
      <div className="flex items-center w-11/12 rounded-lg shadow-2xl p-6 m-auto space-x-7">
        <article className="w-2/4 p-2">
          <p className="font-bold text-2xl">DISCOVER</p>
          <h1 className="font-black text-4xl">UPCOMING EVENTS</h1>
          <p className="text-gray-500 mt-6 pr-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
          <div className="flex items-center justify-between w-12 mt-6">
            <labe className="text-yellow-400 font-black text-6xl">.</labe>
            <labe className="text-gray-200 font-black text-6xl">.</labe>
            <labe className="text-gray-200 font-black text-6xl">.</labe>
          </div>
        </article>
        <div className="w-2/4">
          <img src={aboutImage} alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About
