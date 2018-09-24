export default {
  type: "object",
  name: "typeform",
  title: "Typeform",
  fields: [
    {
      type: "string",
      name: "heading",
      title: "Heading"
    },
    {
      type: "url",
      name: "url",
      title: "Url"
    }
  ],
  preview: {
    select: {
      title: "heading"
    }
  }
}
