import React from "react"
import { useOpenId } from ".."
import { logger } from "../components/OpenId"

export const useLogout = ({ onSuccess, onFailure }) => {
  const { userManager } = useOpenId()

  return React.useCallback(() => {
    if (userManager) {
      logger.debug("Logout called")
      userManager
        .signoutRedirect()
        .then(onSuccess)
        .catch(onFailure)
    }
  }, [userManager])
}
