import { getFields, getPreview } from "./supportedLanguages"

export default {
  title: "Localized Text",
  name: "localeText",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsable: true }
    }
  ],
  fields: getFields("text"),
  preview: getPreview()
}
