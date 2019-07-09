import { useState, useEffect } from "react"
import { useOpenId } from "../context"

const CALLBACK_LOGIN_USE_PARENT = "callbackLoginUseParent"

export const useUrlLogin = (redirectParentOnCallback = true) => {
  const { userManager, onError, setItem } = useOpenId()
  const [url, setUrl] = useState()

  redirectParentOnCallback && setItem(CALLBACK_LOGIN_USE_PARENT, true)

  useEffect(() => {
    if (userManager) {
      userManager
        .createSigninRequest()
        .then(req => setUrl(req.url))
        .catch(() => {
          if (window) {
            window.location.replace(onError)
          } else {
            throw new Error("Could not create sign in request")
          }
        })
    }
  }, [userManager])

  return { url }
}
