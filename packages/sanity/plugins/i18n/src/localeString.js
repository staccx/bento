import { getFields, getPreview } from "./supportedLanguages"

export default {
  title: "LocalizedString",
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsable: true }
    }
  ],
  fields: getFields("string"),
  preview: getPreview()
}
