import { useContext, useEffect } from "react"
import Context from "../context"

const CallbackLogout = () => {
  const { userManager, afterLogout, onError } = useContext(Context)
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

export default CallbackLogout
