import { useEffect } from "react"
import { useOpenId } from "./OpenId"

export const CallbackLogout = () => {
  const { userManager, afterLogout, onError } = useOpenId()
  useEffect(() => {
    if (userManager) {
      userManager
        .signoutRedirectCallback()
        .then(() => window.location.replace(afterLogout))
        .catch(() => window.location.replace(onError))
    }
  }, [userManager])
  return null
}
