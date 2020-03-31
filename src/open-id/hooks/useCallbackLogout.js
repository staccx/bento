import React from "react"
import { useTimer } from "../../hooks"
import { useOpenId } from ".."
import { logger } from "../components/OpenId"

export const useCallbackLogout = ({
  minTimeBeforeRedirect = 0,
  onSucces,
  onFailure
}) => {
  const ready = useTimer(minTimeBeforeRedirect)
  const { userManager } = useOpenId()

  React.useEffect(() => {
    logger.debug("CallbackLogout")
    if (userManager && ready) {
      logger.debug("CallbackLogout called")
      userManager
        .signoutRedirectCallback()
        .then(onSucces)
        .catch(onFailure)
    }
  }, [userManager, ready])
}
