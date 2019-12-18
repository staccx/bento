import { useEffect } from "react"
import { useOpenId } from "./OpenId"

export const CallbackLoginSilent = () => {
  const { userManager } = useOpenId()

  useEffect(() => {
    if (userManager) {
      userManager.signinSilentCallback()
    }
  }, [userManager])

  return null
}
