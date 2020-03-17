import React from "react"
import PropTypes from "prop-types"
import { useOpenId } from ".."
import { logger } from "./OpenId"
import { useTimer } from "../../hooks"

const CallbackLogin = ({
  minTimeBeforeRedirect,
  onSuccess,
  onFailure,
  element
}) => {
  const {
    userManager,
    afterLogin,
    onError,
    reloadParentAfterLogin
  } = useOpenId()

  const ready = useTimer(minTimeBeforeRedirect)
  const _window = reloadParentAfterLogin ? window.parent : window

  React.useEffect(() => {
    logger.debug("CallbackLogin")
    if (userManager && ready) {
      logger.debug("SigningRedirectCallback being called")
      userManager
        .signinRedirectCallback()
        .then(result => {
          logger.info("SigninRedirectCallback successful", result)
          if (onSuccess) {
            logger.info("Using success callback", afterLogin)
            onSuccess(result)
          } else {
            logger.info("Replacing location with", afterLogin)
            _window.location.replace(afterLogin)
          }
        })
        .catch(error => {
          logger.info("SigninRedirectCallback unsuccessful", error)
          if (onFailure) {
            logger.info("Using failure callback", onError)
            onFailure(error)
          } else {
            logger.error("Fallback to replace location", onError)
            _window.location.replace(onError)
          }
        })
    }
  }, [userManager, ready])

  if (element) {
    return element
  }

  return null
}

CallbackLogin.propTypes = {
  /**
   * will postpone redirect for x ms
   */
  minTimeBeforeRedirect: PropTypes.number,
  /**
   * Callback when redirect callback succeeds
   */
  onSucces: PropTypes.func,
  /**
   * Callback when redirect callback fails
   */
  onFailure: PropTypes.func,
  /**
   * If you want to render something whilst the redirect callback happens
   */
  element: PropTypes.element
}

CallbackLogin.defaultProps = {
  minTimeBeforeRedirect: 0
}

export { CallbackLogin }
