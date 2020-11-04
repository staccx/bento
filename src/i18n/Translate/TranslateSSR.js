import { useEffect, useMemo, useState } from "react"
import { i18nLogger, useI18n } from "../I18n"
import { getComponent } from "../utils"

const TranslateSSR = ({ i18n, children }) => {
  const { ready, backend, transform, language } = useI18n()

  const client = useMemo(() => {
    if (!ready) {
      return null
    }
    return backend?.getClient()
  }, [backend, ready])

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

    i18nLogger.info("Fetching from sanity", i18n)
    i18nLogger.info(
      "Query",
      `*[_type == "translations" && i18nKey.current == ${i18n}][0]{"value": value[0], "key": i18nKey.current}`
    )

    client
      .fetch(
        `*[_type == "translations" && i18nKey.current == $key][0]{"value": value[0], "key": i18nKey.current}`,
        {
          key: i18n
        }
      )
      .then(val => {
        i18nLogger.info("Result from sanity", val?.toString())
        valueSet(val)
      })
      .catch(errorSet)
  }, [language, client])

  if (error) {
    i18nLogger.error("Error", error)
  }

  if (!value) {
    return children
  }

  if (Array.isArray(value)) {
    return value.map(getComponent)
  }
  return transform(value, children)
}

export default TranslateSSR
