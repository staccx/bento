import React from "react"
import { useOpenId } from ".."
import { logger } from "./OpenId"

export const CallbackLogin = () => {
  const {
    userManager,
    afterLogin,
    onError,
    reloadParentAfterLogin
  } = useOpenId()

  const _window = reloadParentAfterLogin ? window.parent : window

  React.useEffect(() => {
    logger.debug("CallbackLogin")
    if (userManager) {
      logger.debug("SigningRedirect being called")
      userManager
        .signinRedirectCallback()
        .then(() => {
          logger.info("Signin redirect successful. Redirecting to", afterLogin)
          _window.location.replace(afterLogin)
        })
        .catch(error => {
          logger.error("Could not signin redirect", error)
          _window.location.replace(onError)
        })
    }
  }, [userManager])

  return null
}
