import { useState, useEffect } from "react"
import { useOpenId } from "../context"

export const useUrlLogin = (redirectParentOnCallback = true) => {
  const { userManager } = useOpenId()
  const [url, setUrl] = useState()

  useEffect(() => {
    if (userManager) {
      userManager.createSigninRequest().then(req => setUrl(req.url))
    }
  }, [userManager])

  return { url }
}
