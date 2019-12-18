import { useOpenId } from ".."

export const CallbackLogin = () => {
  const {
    userManager,
    afterLogin,
    onError,
    reloadParentAfterLogin
  } = useOpenId()

  const _window = reloadParentAfterLogin ? window.parent : window

  userManager &&
    userManager
      .signinRedirectCallback()
      .then(() => _window.location.replace(afterLogin))
      .catch(() => _window.location.replace(onError))

  return null
}
