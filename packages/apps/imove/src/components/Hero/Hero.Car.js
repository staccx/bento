import React from "react"

const Car = ({ img, name }) => (
  <div>
    <img src={img} alt={name} />
    <p>{name}</p>
  </div>
)

export default Car
