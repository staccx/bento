import React from "react"
import { useTimer } from "../../hooks"
import { logger, useOpenId } from "../components/OpenId"

export const useCallbackLogin = ({
  minTimeBeforeRedirect = 0,
  onSuccess,
  onFailure
}) => {
  const ready = useTimer(minTimeBeforeRedirect)
  const { userManager } = useOpenId()

  React.useEffect(() => {
    if (userManager && ready) {
      logger.debug("SigningRedirectCallback being called")
      userManager
        .signinRedirectCallback()
        .then(onSuccess)
        .catch(onFailure)
    }
  }, [userManager, ready])
}
