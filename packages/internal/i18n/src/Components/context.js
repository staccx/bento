import React from "react"

const defaultValue = {
  languages: [],
  language: {},
  setLanguage: () => null,
  texts: {}
}

const { Provider, Consumer } = React.createContext(defaultValue)

export { Provider, Consumer }
