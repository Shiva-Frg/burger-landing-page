import React from 'react'

// import food from '../../../assets/menu-left.png'

const Features = () => {
  return (
    <section className="grid grid-cols-2 gap-x-8 gap-y-8 w-11/12 m-auto h-96 mt-10">
      <div className="rounded-md bg-feature-img-1 bg-center p-5 row-span-2 ">
        <p className="font-bold text-white">TRY IT TODAY</p>
        <h1 className="font-bold text-2xl text-white">MOST PUPULAR BURGER</h1>
      </div>
      <div className="rounded-md bg-feature-img-2 bg-center bg-cover p-5">
        <p className="font-bold text-white">TRY IT TODAY</p>
        <h1 className="font-bold text-2xl text-white">MORE FRUN</h1>
        <h1 className="font-bold text-2xl text-white">MORE TASTE</h1>
      </div>
      <div className="rounded-md bg-feature-img-3 bg-center p-5">
        <p className="font-bold text-white">TRY IT TODAY</p>
        <h1 className="font-bold text-2xl text-white">FRESH & CHILI</h1>
      </div>
    </section>
  )
}

export default Features
