import React from "react"
import { useOpenId } from ".."
import { logger } from "../components/OpenId"
import { useTimer } from "../../hooks"

export const useLogout = ({
  minTimeBeforeRedirect = 0,
  onSuccess,
  onFailure
}) => {
  const ready = useTimer(minTimeBeforeRedirect)
  const { userManager } = useOpenId()
  React.useEffect(() => {
    logger.debug("Logout")
    if (userManager && ready) {
      logger.debug("Logout called")
      userManager
        .signoutRedirect()
        .then(onSuccess)
        .catch(onFailure)
    }
  }, [userManager, ready])
}
