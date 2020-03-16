import { useEffect } from "react"
import { useOpenId, logger } from "./OpenId"

export const CallbackLoginSilent = () => {
  const { userManager } = useOpenId()

  useEffect(() => {
    logger.debug("CallbackLoginSilent")
    if (userManager) {
      logger.debug("CallbackLoginSilent called")
      userManager
        .signinSilentCallback()
        .then(() => {
          logger.debug("LoginSilent successful")
        })
        .catch(error => {
          logger.error("LoginSilent failed", error)
        })
    }
  }, [userManager])

  return null
}
