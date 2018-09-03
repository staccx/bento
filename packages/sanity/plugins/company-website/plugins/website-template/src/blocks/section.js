export default {
  type: "object",
  name: "section",
  title: "Section",
  fields: [
    {
      type: "sectionHead",
      name: "head",
      title: "Section head"
    },
    {
      type: "array",
      name: "links",
      title: "Link blocks",
      of: [{ type: "linkBlock" }]
    }
  ],
  preview: {
    select: {
      title: "head.title",
      media: "head.image"
    }
  }
}
