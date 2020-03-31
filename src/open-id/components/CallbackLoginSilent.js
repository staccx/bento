import { logger } from "./OpenId"
import { useCallbackLoginSilent } from ".."

export const CallbackLoginSilent = ({
  minTimeBeforeRedirect,
  onSuccess,
  onFailure
}) => {
  useCallbackLoginSilent({
    minTimeBeforeRedirect,
    onSuccess: result => {
      logger.debug("LoginSilent successful")
      onSuccess(result)
    },
    onFailure: error => {
      logger.error("LoginSilent failed", error)
      onFailure(error)
    }
  })

  return null
}
