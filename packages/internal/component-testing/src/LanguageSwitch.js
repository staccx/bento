import React from "react"
import { i18n } from "@staccx/base"

const LanguageSwitch = () => {
  const { languages, changeLanguage, ready } = i18n.useI18n()
  if (!ready) {
    return null
  }

  return (
    <select
      onChange={e => {
        changeLanguage(languages[e.target.value])
      }}
    >
      {languages.map((lang, index) => (
        <option key={lang} value={index}>
          {lang}
        </option>
      ))}
    </select>
  )
}

export default LanguageSwitch
