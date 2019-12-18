import { useContext } from "react"
import Context from "../context"

const CallbackLogin = () => {
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

export default CallbackLogin
