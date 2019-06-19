export default {
  title: "Value",
  name: "translationValue",
  type: "array",
  of: [
    { type: "localeString" },
    { type: "localeText" },
    { type: "localeRichText" }
  ],
  validation: Rule => Rule.required()
}
