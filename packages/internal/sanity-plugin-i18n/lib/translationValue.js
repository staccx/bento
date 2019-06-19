export default {
  title: "Value",
  name: "translationValue",
  type: "array",
  of: [
    {
      type: "localeString"
    },
    {
      type: "localeText"
    },
    {
      type: "localeRichText"
    }
  ],
  validation: function validation(Rule) {
    return Rule.required()
  }
}
