import React, { useState, useEffect } from 'react'

import menuFood from '../../../assets/menu-foods-1.png'

const Foods = ({ menu }) => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const foodsArray = []
    menu.map((item) => foodsArray.push(item))
    setFoods(foodsArray)
  }, [menu])

  const content = foods.map((item) => (
    <article
      key={item.id}
      className="flex flex-col items-center justify-center space-y-4"
    >
      <div>
        <img src={menuFood} alt="food" />
      </div>
      <div className="text-center w-3/5 space-y-3">
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <p className="text-gray-500">{item.description}</p>
      </div>
      <button className="bg-red-600 p-4 w-2/5 font-bold text-white">
        ORDER NOW
      </button>
    </article>
  ))

  return (
    <>
      <section className="grid grid-cols-3">{content}</section>
    </>
  )
}

export default Foods
