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
      name: "title",
      title: "og:title"
    },
    {
      type: "string",
      name: "description",
      title: "og:description"
    },
    {
      type: "slug",
      name: "url",
      title: "og:url",
      options: {
        source: "path",
        maxLength: 96,
        auto: true,
        slugify: input => `https://stacc.com${input.current}`
      }
    },
    {
      type: "image",
      name: "image",
      title: "og:image"
    }
  ]
}
