import React, { useState, createContext, useContext, useEffect } from "react"
import Oidc, { UserManager } from "oidc-client"
import Context from "./context"

export default createContext()

Oidc.Log.level = Oidc.Log.DEBUG
Oidc.Log.logger = console

export const OpenId = ({ children, config, ...props }) => {
  console.log("rendering openid")
  const initialConfigName = sessionStorage.getItem("openIdConfigName")
  const [configName, _setConfigName] = useState(initialConfigName)

  const initialConfig = configName ? config[configName].oidc : void 0
  const [userManager, setUserManager] = useState(new UserManager(initialConfig))

  const setConfigName = name => {
    console.log("creating new usermanager", name)
    sessionStorage.setItem("openIdConfigName", name)
    setUserManager(new UserManager(config[name].oidc))
    _setConfigName(name)
  }

  return (
    <Context.Provider
      value={{
        userManager,
        configName,
        setConfigName,
        config: config[configName],
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
  useEffect(() => {
    userManager.getUser().then(user => setUser(user))
  }, [userManager])

  return user
}
