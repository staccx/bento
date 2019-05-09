import React, { createContext, useReducer, useContext, useMemo } from "react"
import PropTypes from "prop-types"
import produce from "immer"
import { translate as t, convert as c } from "@staccx/i18n"

const I18nContext = createContext({})

const actions = {
  setLanguage: "SEND",
  initialize: "INIT"
}

const reducer = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.setLanguage:
        draft.language = action.language
        break
      case actions.initialize:
        draft = Object.assign(draft, action.payload)
        break
    }
  })

const I18n = ({ children, ...props }) => {
  const [i18n] = useReducer(reducer, props)
  const { texts = null } = props

  return (
    <I18nContext.Provider
      value={{
        texts,
        ...i18n
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

I18n.propTypes = {
  children: PropTypes.element.isRequired,
  texts: PropTypes.object.isRequired
}

export const useI18n = () => {
  const value = useContext(I18nContext)

  const { language = "no", texts, level } = value

  const translate = ({ key, data, fallback, namespace }) =>
    t({ texts, language, key, data, fallback, namespace, level })
  const convert = value => c(value, language)

  return useMemo(() => {
    return {
      translate,
      convert,
      ...value
    }
  }, [value])
}

export default I18n
