import { useEffect, useState } from "react"
import { useOpenId } from "../components/OpenId"

const useOpenIdUser = () => {
  const { userManager } = useOpenId()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    userManager.getUser().then(user => {
      setUser(user)
      setLoading(false)
    })
  }, [userManager])

  return [user, loading]
}

export default useOpenIdUser
