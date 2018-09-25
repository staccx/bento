export default {
  type: "document",
  name: "page",
  title: "Other pages",
  fields: [
    { type: "string", name: "name", title: "Name" },
    {
      type: "string",
      name: "pageTitle",
      title: "Page Title",
      description: "What will be shown on top of page with sub pages"
    },
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
