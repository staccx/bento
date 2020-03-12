import React from "react"
import { useOpenId } from ".."

export const CallbackLogin = () => {
  const {
    userManager,
    afterLogin,
    onError,
    reloadParentAfterLogin
  } = useOpenId()

  const _window = reloadParentAfterLogin ? window.parent : window

  React.useEffect(() => {
    if (userManager) {
      userManager
        .signinRedirectCallback()
        .then(() => _window.location.replace(afterLogin))
        .catch(() => _window.location.replace(onError))
    }
  }, [userManager])

  return null
}
