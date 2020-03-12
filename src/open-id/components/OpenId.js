import loglevel from "loglevel"
import React, { createContext, useContext, useEffect } from "react"
import Oidc, { UserManager } from "oidc-client"
import PropTypes from "prop-types"
import { logLevelFromNumber } from "../utils/logLevelFromString"

export const OpenIdContext = createContext({})

export const OpenId = ({ children, config, extraConfig, level, ...props }) => {
  useEffect(() => {
    Oidc.Log.level = Math.min(level, Oidc.Log.DEBUG) // 4 and 5 produce DEBUG log level
    loglevel.setLevel(logLevelFromNumber(level))
  }, [level])

  const userManager = React.useMemo(() => new UserManager(config), [config])

  const fetchToken = async () => {
    if (!userManager) {
      loglevel.error("UserManager not initialized")
      return
    }
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

OpenId.propTypes = {
  level: PropTypes.oneOf([
    Oidc.Log.NONE,
    Oidc.Log.ERROR,
    Oidc.Log.WARN,
    Oidc.Log.INFO,
    Oidc.Log.DEBUG,
    5
  ])
}

OpenId.defaultProps = {
  level: 5
}

export const useOpenId = () => useContext(OpenIdContext)
