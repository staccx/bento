import { useContext } from "react"
import Context from "./context"

export const CallbackLogin = () => {
  const {
    userManager,
    afterLogin,
    onError,
    reloadParentAfterLogin
  } = useContext(Context)

  const _window = reloadParentAfterLogin ? window.parent : window

  userManager &&
    userManager
      .signinRedirectCallback()
      .then(() => _window.location.replace(afterLogin))
      .catch(() => _window.location.replace(onError))

  return null
}

export const CallbackLoginSilent = () => {
  const { userManager } = useContext(Context)
  userManager && userManager.signinSilentCallback()

  return null
}

export const Logout = () => {
  const { userManager, onError } = useContext(Context)
  userManager &&
    userManager
      .signoutRedirect()
      .catch(() =>
        userManager.removeUser().then(() => window.location.replace(onError))
      )

  return null
}

export const CallbackLogout = () => {
  const { userManager, afterLogout, onError } = useContext(Context)
  userManager &&
    userManager
      .signoutRedirectCallback()
      .then(() => window.location.replace(afterLogout))
      .catch(() => window.location.replace(onError))

  return null
}
