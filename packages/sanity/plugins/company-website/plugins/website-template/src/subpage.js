export default {
  type: "object",
  name: "subpage",
  title: "Sub pages",
  fields: [
    { type: "string", name: "title", title: "Title" },
    {
      type: "blockContent",
      name: "blocks",
      title: "Blocks"
    }
  ]
}
