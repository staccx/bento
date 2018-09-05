import React from "react"

const Column = ({ heading, children }) => (
  <li>
    <h3>{heading}</h3>
    <div>{children}</div>
  </li>
)

export default Column
