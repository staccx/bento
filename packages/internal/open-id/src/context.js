import React, { useState, createContext, useContext, useEffect } from "react"
import Oidc, { UserManager } from "oidc-client"
import loglevel from "loglevel"

const Context = createContext()

// TODO: Make prop `debug`
Oidc.Log.logger = loglevel

export const OpenId = ({
  children,
  config,
  extraConfig,
  level = "warn",
  ...props
}) => {
  Oidc.Log.level = Oidc.Log.DEBUG

  loglevel.setLevel(level)

  const userManager = new UserManager(config)

  const fetchToken = async () => {
    const user = await userManager.getUser()
    return user ? user.access_token : null
  }

  return (
    <Context.Provider
      value={{
        userManager,
        config,
        extraConfig,
        fetchToken,
        ...props
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useOpenId = () => useContext(Context)

export const useUser = () => {
  const { userManager } = useContext(Context)
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    userManager.getUser().then(user => {
      setUser(user)
      setLoading(false)
    })
  }, [userManager])

  return [user, loading]
}

export default Context
