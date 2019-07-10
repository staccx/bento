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
  level = Oidc.Log.DEBUG,
  ...props
}) => {
  Oidc.Log.level = level
  loglevel.setLevel(level)
  loglevel.debug("rendering openid")

  const userManager = new UserManager(config)

  return (
    <Context.Provider
      value={{
        userManager,
        config,
        extraConfig,
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
