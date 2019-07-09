import { useContext, useState } from "react"
import axios from "axios"
import qs from "qs"
import Context from "../context"

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
  const { userManager, config } = useContext(Context)
  const [stage, setStage] = useState()
  const [input, setInput] = useState()
  const [state, setState] = useState()

  if (userManager) {
    userManager.getUser().then(user => {
      if (user) {
        console.log("already logged in")
      } else if (!state && config) {
        console.log("user was not logged in", user, state, config)
        setState(getState(userManager))
      }
    })
  }

  if (state && !stage) {
    setStage(stages.WAITING_FOR_USERNAME)
  }

  const next = () => {
    switch (stage) {
      case stages.WAITING_FOR_USERNAME:
        axios
          .post(config.idPostUri, {
            [config.userField]: input,
            state
          })
          .then(() => setStage(stages.WAITING_FOR_PASSWORD))
          .catch(() => setStage(stages.ERROR))
        break

      case stages.WAITING_FOR_PASSWORD:
      case stages.WRONG_PASSWORD:
        axios
          .post(config.codePostUri, { nonce: input, state })
          .then(() => {
            setStage(stages.SIGNING_IN)

            window.location.replace(
              `${userManager.settings.authority}${
                config.callbackPath
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

const stages = {
  WAITING_FOR_USERNAME: Symbol("WAITING_FOR_USERNAME"),
  WAITING_FOR_PASSWORD: Symbol("WAITING_FOR_PASSWORD"),
  WRONG_PASSWORD: Symbol("WRONG_PASSWORD"),
  NO_MORE_PASSWORD_ATTEMPTS: Symbol("NO_MORE_PASSWORD_ATTEMPTS"),
  ERROR: Symbol("ERROR")
}
