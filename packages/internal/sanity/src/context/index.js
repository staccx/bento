import React from "react"

const defaultValue = {
  results: []
}

const { Provider, Consumer } = React.createContext(defaultValue)

export { Provider, Consumer }
