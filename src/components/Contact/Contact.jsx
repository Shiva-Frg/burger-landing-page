import React from 'react'

const Contact = () => {
  return (
    <section className="h-screen bg-contact bg-cover">
      <div className="h-5/6 flex flex-col items-center justify-center">
        <div className="text-center w-full mt-32">
          <p className="font-bold text-2xl">RESEVATION</p>
          <h1 className="text-5xl font-black">BOOK YOUR TABLE</h1>
        </div>
        <form className="m-auto w-1/2 grid grid-cols-2 gap-x-3 gap-y-3">
          <input
            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="NAME"
          />
          <input
            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="EMAIL"
          />
          <input
            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="date"
            placeholder="DATE"
          />
          <input
            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="time"
            placeholder="TIME"
          />
          <input
            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="PEOPLE"
          />
          <input
            class="font-black text-lg appearance-none block w-full bg-red-600 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="submit"
            value="FIND A TABLE"
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
