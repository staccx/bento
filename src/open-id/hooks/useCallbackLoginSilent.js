import React from "react"
import { useTimer } from "../../hooks"
import { logger, useOpenId } from "../components/OpenId"

export const useCallbackLoginSilent = ({
  minTimeBeforeRedirect = 0,
  onSucces,
  onFailure
}) => {
  const ready = useTimer(minTimeBeforeRedirect)
  const { userManager } = useOpenId()

  React.useEffect(() => {
    logger.debug("CallbackLoginSilent")
    if (userManager && ready) {
      logger.debug("CallbackLoginSilent called")
      userManager
        .signinSilentCallback()
        .then(onSucces)
        .catch(onFailure)
    }
  }, [userManager])
}
