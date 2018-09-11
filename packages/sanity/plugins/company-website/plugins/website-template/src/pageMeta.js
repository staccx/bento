export default {
  type: "object",
  name: "meta",
  title: "Meta",
  options: {
    collapsible: true
  },
  fields: [
    {
      type: "string",
      name: "name",
      title: "og:title"
    },
    {
      type: "string",
      name: "description",
      title: "og:description"
    },
    {
      type: "string",
      name: "type",
      title: "og:type"
    },
    {
      type: "url",
      name: "url",
      title: "og:url"
    },
    {
      type: "image",
      name: "image",
      title: "og:image"
    }
  ]
}