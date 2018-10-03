import React from "react"

const ExtraCars = ({ data }) => (
  <div>
    {data.cars.map(x => (
      <div key={x._key}>
        <img src={x.img} alt={x.alt} />
        <h3>{x.heading}</h3>
        <p>{x.headingSub}</p>
      </div>
    ))}
    <div>
      <h3>{data.heading}</h3>
      <p>{data.paragraph}</p>
    </div>
  </div>
)

export default ExtraCars
