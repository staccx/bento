import loglevel from "loglevel"
import React, { useState, useEffect, useContext, createContext } from "react"
import Oidc, { UserManager } from "oidc-client"

export const OpenIdContext = createContext({})

export const OpenId = ({
  children,
  config,
  extraConfig,
  level = "warn",
  ...props
}) => {
  const [userManager, setUsermanager] = useState(() => null)
  useEffect(() => {
    Oidc.Log.level = level
    loglevel.setLevel(level)
    setUsermanager(new UserManager(config))
  }, [])

  const fetchToken = async () => {
    const user = await userManager.getUser()
    return user?.access_token
  }

  return (
    <OpenIdContext.Provider
      value={{
        userManager,
        config,
        extraConfig,
        fetchToken,
        ...props
      }}
    >
      {children}
    </OpenIdContext.Provider>
  )
}

export const useOpenId = () => useContext(OpenIdContext)

export default OpenId
