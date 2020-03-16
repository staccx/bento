import { useEffect, useState } from "react"
import { useOpenId, logger } from "../components/OpenId"

export const useOpenIdUser = () => {
  const { userManager } = useOpenId()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    logger.debug("UseOpenIdUser")
    if (userManager) {
      logger.debug("UseOpenIdUser called")
      userManager
        .getUser()
        .then(user => {
          logger.debug("UserOpenIdUser successful", user)
          setUser(user)
          setLoading(false)
        })
        .catch(error => {
          logger.error("failed to setUser", error)
        })
    }
  }, [userManager])

  return [user, loading]
}
