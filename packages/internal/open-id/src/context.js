import React from "react"

const defaultValue = {
  user: null,
  isAuthenticated: false,
  signinRedirect: () => null,
  signinSilent: () => null,
  signoutRedirect: () => null
}

const { Provider, Consumer } = React.createContext(defaultValue)

export { Provider, Consumer }
