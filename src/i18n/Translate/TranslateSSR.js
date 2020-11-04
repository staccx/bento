import { useEffect, useMemo, useState } from "react"
import { i18nLogger, useI18n } from "../I18n"

const TranslateSSR = ({ i18n, children }) => {
  const { backend, transform, language } = useI18n()

  const client = useMemo(() => {
    return backend?.getClient()
  }, [backend])

  const [value, valueSet] = useState(null)
  const [error, errorSet] = useState(null)

  useEffect(() => {
    if (value) {
      return
    }

    if (!client) {
      i18nLogger.warn("No sanity client found in client")
      return
    }

    client
      .fetch(
        `*[_type == "translations" && i18nKey.current == $key][0]{"value": value[0], "key": i18nKey.current}`,
        {
          key: i18n
        }
      )
      .then(valueSet)
      .catch(errorSet)
  }, [language, client])

  if (error) {
    i18nLogger.error("Error", error)
  }

  if (!value) {
    return children
  }

  return transform(value, children)
}

export default TranslateSSR
