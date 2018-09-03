export default {
  type: "object",
  name: "linkBlock",
  title: "Link block",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "text",
      name: "body",
      title: "Body"
    },
    {
      type: "reference",
      name: "link",
      title: "Link",
      to: [{ type: "page" }]
    }
  ]
}
