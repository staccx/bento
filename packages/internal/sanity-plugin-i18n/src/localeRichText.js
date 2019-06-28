import blockOptions from "part:@staccx/i18n/blockOptions?"

import { getFields, fieldsets } from "./supportedLanguages"

const options = blockOptions || {}

console.log(options)

console.log("here")
export default {
  title: "Localized Rich text",
  name: "localeRichText",
  type: "object",
  fieldsets,
  fields: getFields("array", [
    {
      type: "block",
      ...options
    },
    { type: "image" }
  ]),
  preview: {
    select: {
      title: "nb"
    },

    prepare(selection) {
      const { _type, title } = selection
      return {
        title: title.length
          ? title[0].children
              .reduce((acc, current) => acc + current.text, "")
              .substring(0, 20)
          : "denne er tom",
        subtitle: _type
      }
    }
  }
}
