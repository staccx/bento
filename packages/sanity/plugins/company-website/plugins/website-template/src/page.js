export default {
  type: "document",
  name: "page",
  title: "Pages",
  index: 0,
  fields: [
    { type: "string", name: "title", title: "Title" },
    {
      type: "slug",
      name: "path",
      title: "Path",
      options: {
        source: "title",
        maxLength: 96,
        auto: true
      }
    },
    {
      type: "blockContent",
      name: "Blocks",
      title: "Blocks"
    }
  ]
}
