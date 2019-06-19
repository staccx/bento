export default {
  title: "Translations",
  name: "translations",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Key",
      name: "i18nKey",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        auto: true
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Value",
      name: "value",
      type: "translationValue"
    },
    {
      title: "Namespace",
      name: "namespace",
      type: "string"
    }
  ]
}
