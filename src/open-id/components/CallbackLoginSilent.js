import { useContext, useEffect } from "react"
import Context from "../context"

const CallbackLoginSilent = () => {
  const { userManager } = useContext(Context)

  useEffect(() => {
    if (userManager) {
      userManager.signinSilentCallback()
    }
  }, [userManager])

  return null
}

export default CallbackLoginSilent
