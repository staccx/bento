import dateNowPlugin from "./plugins/date.now"
import formatCurrencyPlugin from "./plugins/format.currency"

export const i18nConfig = {
  texts: {
    HELLO: {
      nb: "Heisann, {name}, dagens dato: {date.now}, {currency(price)}",
      en: "Hi there, {name}, today is {date.now}, {currency(price)}"
    },
    listItem1: {
      nb: "Første element",
      en: "First element"
    },
    listItem2: {
      nb: "Andre element",
      en: "2nd"
    },
    listItem3: {
      nb: "Tredje element",
      en: "3rd"
    },
    next: {
      nb: "Neste",
      en: "Next"
    }
  },
  language: "en",
  languages: ["nb", "en"],
  data: { name: "Stacc X", price: 10000 },
  debug: true,
  plugins: [dateNowPlugin, formatCurrencyPlugin],
  pluginOptions: {
    timeNow: {
      en: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      },
      nb: {
        weekday: "long"
      }
    },
    currency: {
      format: "%s %v",
      nb: {
        thousand: ".",
        symbol: "kr"
      },
      en: {
        thousand: " ",
        symbol: "$"
      }
    }
  }
}
