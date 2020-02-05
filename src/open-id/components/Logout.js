import { useEffect } from "react"
import { useOpenId } from "./OpenId"

export const Logout = () => {
  const { userManager, onError } = useOpenId()
  useEffect(() => {
    if (userManager) {
      userManager
        .signoutRedirect()
        .catch(() =>
          userManager.removeUser().then(() => window.location.replace(onError))
        )
    }
  }, [userManager])

  return null
}
