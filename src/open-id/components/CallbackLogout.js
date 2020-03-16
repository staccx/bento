import { useEffect } from "react"
import { useOpenId, logger } from "./OpenId"

export const CallbackLogout = () => {
  const { userManager, afterLogout, onError } = useOpenId()
  useEffect(() => {
    logger.debug("CallbackLogout")
    if (userManager) {
      logger.debug("CallbackLogout called")
      userManager
        .signoutRedirectCallback()
        .then(() => {
          logger.debug("CallbackLogout successful rederection to", afterLogout)
          window.location.replace(afterLogout)
        })
        .catch(error => {
          logger.debug("Could not log out redirect", error)
          window.location.replace(onError)
        })
    }
  }, [userManager])
  return null
}
