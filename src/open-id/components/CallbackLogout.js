import { useOpenId, logger } from "./OpenId"
import { useCallbackLogout } from "../hooks/useCallbackLogout"

export const CallbackLogout = ({
  minTimeBeforeRedirect,
  onSuccess,
  onFailure
}) => {
  const { afterLogout, onError } = useOpenId()

  useCallbackLogout({
    minTimeBeforeRedirect,
    onSucces: result => {
      logger.debug("CallbackLogout successful rederection to", afterLogout)
      if (onSuccess) {
        logger.info("Using success callback", afterLogout)
        onSuccess(result)
      } else {
        logger.info("Replacing location with", afterLogout)
        window.location.replace(afterLogout)
      }
    },
    onFailure: error => {
      logger.debug("Could not log out redirect", error)
      if (onFailure) {
        logger.info("Using failure callback", onError)
        onFailure(error)
      } else {
        logger.info("Fallback to replace location", onError)
        window.location.replace(onError)
      }
    }
  })

  return null
}
