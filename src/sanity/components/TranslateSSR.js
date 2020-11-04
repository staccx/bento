import { useEffect, useState } from "react"
import loglevel from "loglevel"
import useSanity from "./useSanity"
import { getComponent } from "../../i18n/utils"

const logger = loglevel.getLogger("TRANSLATESSR")
const TranslateSSR = ({ key, children }) => {
  const { sanityConfig, client } = useSanity()
  const [value, valueSet] = useState(null)
  const [error, errorSet] = useState(null)

  useEffect(() => {
    if (value) {
      return
    }

    if (!sanityConfig) {
      logger.warn("No sanity config found in context")
      return
    }

    if (!client) {
      logger.warn("No sanity client found in client")
      return
    }

    if (!key) {
      logger.error("No key!")
      return
    }

    client
      .fetch(
        `*[_type == "translations" && i18nKey.current == $key][0]{"value": value[0], "key": i18nKey.current}`,
        {
          key
        }
      )
      .then(valueSet)
      .catch(errorSet)
  }, [sanityConfig, client])

  if (error) {
    logger.info("Error", error)
  }

  if (!value) {
    return children
  }

  if (Array.isArray(value)) {
    logger.debug("Handling value is array")
    return value.map(getComponent)
  }
  logger.debug("Key:", key, "resolved to:", value)
  return value
}

export default TranslateSSR
