import { useEffect } from "react"
import { useOpenId, logger } from "./OpenId"

export const Logout = () => {
  const { userManager, onError } = useOpenId()
  useEffect(() => {
    logger.debug("Logout")
    if (userManager) {
      logger.debug("Logout called")
      userManager
        .signoutRedirect()
        .then(() => {
          logger.debug("SignoutRedirect successful")
        })
        .catch(error => {
          logger.error("failed to Logout ", error)
          userManager.removeUser().then(() => window.location.replace(onError))
        })
    }
  }, [userManager])

  return null
}
