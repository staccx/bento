import { useEffect, useState } from "react"
import axios from "axios"
import qs from "qs"
import { useOpenId } from ".."

const stages = {
  WAITING_FOR_USERNAME: Symbol("WAITING_FOR_USERNAME"),
  WAITING_FOR_PASSWORD: Symbol("WAITING_FOR_PASSWORD"),
  WRONG_PASSWORD: Symbol("WRONG_PASSWORD"),
  NO_MORE_PASSWORD_ATTEMPTS: Symbol("NO_MORE_PASSWORD_ATTEMPTS"),
  ERROR: Symbol("ERROR")
}

// TODO: Refactor to be storage agnostic
const getState = userManager => {
  const { state } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true
  })

  const stateTokenFrom = sessionStorage.getItem("stateTokenFrom")

  if (!state || stateTokenFrom !== userManager.settings.acr_values) {
    sessionStorage.setItem("stateTokenFrom", userManager.settings.acr_values)
    userManager.clearStaleState()
    userManager.signinRedirect()
  }

  return state
}

export const useOtpLogin = () => {
  const { userManager, extraConfig } = useOpenId()
  const [stage, setStage] = useState()
  const [input, setInput] = useState()
  const [state, setState] = useState()

  useEffect(() => {
    if (userManager) {
      userManager.getUser().then(user => {
        if (user) {
          console.log("already logged in")
        } else if (!state && extraConfig) {
          console.log("user was not logged in", user, state, extraConfig)
          setState(getState(userManager))
        }
      })
    }
  }, [userManager])

  useEffect(() => {
    if (state && !stage) {
      setStage(stages.WAITING_FOR_USERNAME)
    }
  }, [state, stage])

  const next = () => {
    switch (stage) {
      case stages.WAITING_FOR_USERNAME:
        console.log("posting id", input)
        axios
          .post(extraConfig.idPostUri, {
            [extraConfig.userField]: input,
            state
          })
          .then(() => setStage(stages.WAITING_FOR_PASSWORD))
          .catch(() => setStage(stages.ERROR))
        break

      case stages.WAITING_FOR_PASSWORD:
      case stages.WRONG_PASSWORD:
        axios
          .post(extraConfig.codePostUri, { nonce: input, state })
          .then(() => {
            setStage(stages.SIGNING_IN)

            window.location.replace(
              `${userManager.settings.authority}${
                extraConfig.callbackPath
              }?${qs.stringify({ state })}`
            )
          })
          .catch(({ status }) => {
            switch (status) {
              case 400: // wrong nonce
                setStage(stages.WRONG_PASSWORD)
                break
              case 429: // too many nonce attempts
                setStage(stages.NO_MORE_PASSWORD_ATTEMPTS)
                break
              case 500: // problems fetching from database/services-identity
                setStage(stages.ERROR)
                break
              case 403: // login already completed
                setStage(stages.ERROR)
                break
            }
          })
        break
    }
  }

  return {
    stage,
    stages,
    next,
    input,
    setInput
  }
}
