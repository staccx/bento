export default {
  type: "document",
  name: "page",
  title: "Pages",
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
      type: "array",
      name: "subpages",
      title: "Sub pages",
      of: [
        {
          type: "subpage"
        }
      ]
    },
    {
      type: "blockContent",
      name: "blocks",
      title: "Blocks"
    }
  ]
}
