import React from "react"
import themes from "./themes"
import { default as I18nProvider } from "../src/i18n/I18n"
import LocaleProvider from "../src/locale/LocaleProvider"
import WebFonts from "../src/components/Theme/WebFonts"
import GlobalStyle from "../src/components/Theme/GlobalStyle"
import { ThemeProvider } from "styled-components"

import locales from "./locales"
import languages from "./languages"

const texts = {
  no: {
    translation: {
      key: "En nøkkel",
      key2: "other value",
      car: "{{count}} bil",
      car_plural: "{{count}} biler",
      interpolate: "{{balance, currency}}",
      account: "Konto",
      account_savings: "Sparekonto",
      account_funds: "Fondskonto",
      account_usage: "Brukskonto",
      this_is_key: "norsk verdi",
      blocks: [
        {
          _type: "block",
          _key: "3f1efe4b4982",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "3f1efe4b49820",
              text: "This is rich text ",
              marks: []
            },
            {
              _type: "span",
              _key: "3f1efe4b49821",
              text: "bold text",
              marks: ["strong"]
            },
            {
              _type: "span",
              _key: "3f1efe4b49822",
              text: ". We can even format inside {{balance, currency}} of this",
              marks: []
            }
          ]
        },
        {
          _type: "block",
          _key: "7978c143c053",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "7978c143c0530",
              text: "New line",
              marks: []
            }
          ]
        }
      ]
    }
  },
  da: {
    translation: {
      key: "Kamelåså",
      key2: "other value",
      car: "{{count}} bil",
      car_plural: "{{count}} biler",
      interpolate: "{{balance, currency}}",
      account: "Konto",
      account_savings: "Opsparingskonto",
      account_funds: "Fondskonto",
      account_usage: "Nuværende konto",
      this_is_key: "dansk verdi",
      blocks: [
        {
          _type: "block",
          _key: "3f1efe4b4982",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "3f1efe4b49820",
              text: "This is rich text ",
              marks: []
            },
            {
              _type: "span",
              _key: "3f1efe4b49821",
              text: "bold text",
              marks: ["strong"]
            },
            {
              _type: "span",
              _key: "3f1efe4b49822",
              text: ". We can even format inside {{balance, currency}} of this",
              marks: []
            }
          ]
        },
        {
          _type: "block",
          _key: "7978c143c053",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "7978c143c0530",
              text: "New line",
              marks: []
            }
          ]
        }
      ]
    }
  },
  se: {
    translation: {
      key: "Surströmming",
      key2: "other value",
      car: "{{count}} bil",
      car_plural: "{{count}} bilar",
      interpolate: "{{balance, currency}}",
      account: "Konto",
      account_savings: "Sparkonto",
      account_funds: "Fondkonto",
      account_usage: "Nuvarande konto",
      this_is_key: "svensk verdi",
      blocks: [
        {
          _type: "block",
          _key: "3f1efe4b4982",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "3f1efe4b49820",
              text: "This is rich text ",
              marks: []
            },
            {
              _type: "span",
              _key: "3f1efe4b49821",
              text: "bold text",
              marks: ["strong"]
            },
            {
              _type: "span",
              _key: "3f1efe4b49822",
              text: ". We can even format inside {{balance, currency}} of this",
              marks: []
            }
          ]
        },
        {
          _type: "block",
          _key: "7978c143c053",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "7978c143c0530",
              text: "New line",
              marks: []
            }
          ]
        }
      ]
    }
  },
  fi: {
    translation: {
      key: "Ei saa peittää",
      key2: "other value",
      car: "{{count}} auto",
      car_plural: "{{count}} autoa",
      interpolate: "{{balance, currency}}",
      account: "Tili",
      account_savings: "Säästötili",
      account_funds: "Rahastotili",
      account_usage: "Nykyinen tili",
      this_is_key: "finsk verdi",
      blocks: [
        {
          _type: "block",
          _key: "3f1efe4b4982",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "3f1efe4b49820",
              text: "This is rich text ",
              marks: []
            },
            {
              _type: "span",
              _key: "3f1efe4b49821",
              text: "bold text",
              marks: ["strong"]
            },
            {
              _type: "span",
              _key: "3f1efe4b49822",
              text: ". We can even format inside {{balance, currency}} of this",
              marks: []
            }
          ]
        },
        {
          _type: "block",
          _key: "7978c143c053",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "7978c143c0530",
              text: "New line",
              marks: []
            }
          ]
        }
      ]
    }
  },
  en: {
    translation: {
      key: "Leaders of the free world",
      key2: "other value",
      car: "{{count}} car",
      car_plural: "{{count}} cars",
      interpolate: "{{balance, currency}}",
      account: "Account",
      account_savings: "Savings account",
      account_funds: "Funds account",
      account_usage: "Checking😮 account",
      this_is_key: "engelsk verdi",
      blocks: [
        {
          _type: "block",
          _key: "3f1efe4b4982",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "3f1efe4b49820",
              text: "This is rich text ",
              marks: []
            },
            {
              _type: "span",
              _key: "3f1efe4b49821",
              text: "bold text",
              marks: ["strong"]
            },
            {
              _type: "span",
              _key: "3f1efe4b49822",
              text: ". We can even format inside {{balance, currency}} of this",
              marks: []
            }
          ]
        },
        {
          _type: "block",
          _key: "7978c143c053",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "7978c143c0530",
              text: "New line",
              marks: []
            }
          ]
        }
      ]
    }
  }
}
const getName = theme => theme.storybookName || "NO NAME"
const mapTheme = (theme, index) => ({
  id: index,
  title: getName(theme)
})

const withContext = (Story, context) => {
  const theme = themes[context.globals.theme.id]
  const locale = locales[context.globals.locale.id]
  const language = languages[context.globals.language.id]
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider locale={locale?.data}>
        <I18nProvider
          level={0}
          language={language?.data || "no"}
          texts={texts}
          debug={true}
        >
          <>
            <WebFonts />
            <GlobalStyle />
            <Story {...context} />
          </>
        </I18nProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}

export const decorators = [withContext]

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: mapTheme(themes[0], 0),
    toolbar: {
      icon: "circlehollow",
      items: themes.map(mapTheme)
    }
  },
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: {
      id: 0,
      title: "Norsk",
      right: "🇳🇴"
    },
    toolbar: {
      icon: "globe",
      items: locales.map(locale => ({
        ...locale,
        data: null
      }))
    }
  },
  language: {
    name: "Language",
    description: "Language for i18n",
    defaultValue: {
      id: 0,
      title: "Norsk",
      right: "🇳🇴"
    },
    toolbar: {
      icon: "globe",
      items: languages.map(locale => ({
        ...locale,
        data: null
      }))
    }
  }
}
