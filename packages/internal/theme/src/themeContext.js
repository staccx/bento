import React from "react"

const defaultValue = { activeTheme: null }

const { Provider, Consumer } = React.createContext(defaultValue)

export { Provider, Consumer }
