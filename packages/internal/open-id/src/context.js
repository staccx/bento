import React, { useState, createContext, useContext, useEffect } from "react"
import Oidc, { UserManager } from "oidc-client"
import loglevel from "loglevel"
import Context from "./context"

export default createContext()

// TODO: Make prop `debug`
Oidc.Log.logger = loglevel

const OPEN_ID_CONFIG_NAME = "openIdConfigName"

export const OpenId = ({
  children,
  config,
  storage,
  level = Oidc.Log.DEBUG,
  ...props
}) => {
  Oidc.Log.level = level
  loglevel.setLevel(level)
  loglevel.debug("rendering openid")

  if (!storage) {
    storage = sessionStorage
  }

  const [configName, _setConfigName] = useState(null)
  const [userManager, setUserManager] = useState(null)

  const setItem = async (key, value) => {
    return storage.setItem(key, value)
  }

  const getItem = async key => {
    return storage.getItem(key)
  }

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const configName = await getItem(OPEN_ID_CONFIG_NAME)
    await setConfigName(configName)
  }

  const setConfigName = async name => {
    loglevel.debug("creating new usermanager", name)
    await setItem(OPEN_ID_CONFIG_NAME, name)
    if (!config.hasOwnProperty(name)) {
      loglevel.warn("Config does not contain value for", name)
    }
    setUserManager(new UserManager(config[name].oidc))
    _setConfigName(name)
  }

  if (!userManager) {
    return null
  }

  return (
    <Context.Provider
      value={{
        userManager,
        configName,
        getItem,
        setItem,
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
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    userManager.getUser().then(user => {
      setUser(user)
      setLoading(false)
    })
  }, [userManager])

  return [user, loading]
}
