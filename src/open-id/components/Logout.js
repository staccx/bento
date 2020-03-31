import { useOpenId, logger } from "./OpenId"
import { useLogout } from "../hooks/useLogout"

export const Logout = ({ minTimeBeforeRedirect, onSuccess, onFailure }) => {
  const { userManager, onError } = useOpenId()

  useLogout({
    minTimeBeforeRedirect,
    onSuccess: result => {
      logger.debug("SignoutRedirect successful")
      onSuccess(result)
    },
    onFailure: error => {
      if (onFailure) {
        logger.info("Using failure callback", onError)
        onFailure(error)
      } else {
        logger.info("Fallback to replace location", onError)
        userManager.removeUser().then(() => window.location.replace(onError))
      }
    }
  })

  return null
}
