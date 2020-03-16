import { useState, useEffect } from "react"
import { useOpenId } from ".."
import { logger } from "../components/OpenId"

export const useUrlLogin = (redirectParentOnCallback = true) => {
  const { userManager } = useOpenId()
  const [url, setUrl] = useState()

  useEffect(() => {
    logger.debug("useUrlLogin")
    if (userManager && userManager.settings.authority) {
      logger.debug("UseUrlLogin called")
      userManager
        .createSigninRequest()
        .then(req => {
          logger.debug("useUrlLogin successfull")
          setUrl(req.url)
        })
        .catch(error => {
          logger.error("useUrlLogin failed", error)
        })
    }
  }, [userManager])

  return { url }
}
