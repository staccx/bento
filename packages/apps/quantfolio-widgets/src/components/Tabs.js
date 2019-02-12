import React from "react"

const Tabs = ({ children, current }) => {
  return React.Children.map(children, (child, index) => {
    if (index === current) {
      return child
    }

    return null
  })
}

export default Tabs
