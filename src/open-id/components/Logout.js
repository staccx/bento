import { useContext, useEffect } from "react"
import Context from "../context"

const Logout = () => {
  const { userManager, onError } = useContext(Context)
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

export default Logout
