import { useState, useEffect } from "react"
import { useOpenId } from "../context"

export const useUrlLogin = (redirectParentOnCallback = true) => {
  const { userManager, onError } = useOpenId()
  const [url, setUrl] = useState()

  redirectParentOnCallback &&
    sessionStorage.setItem("callbackLoginUseParent", true)

  useEffect(() => {
    if (userManager) {
      userManager
        .createSigninRequest()
        .then(req => setUrl(req.url))
        .catch(() => window.location.replace(onError))
    }
  }, [userManager])

  return { url }
}
