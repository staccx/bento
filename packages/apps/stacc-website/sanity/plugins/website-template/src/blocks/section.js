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
      media: "head.image",
      title: "head.title"
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title,
        media: media,
        subtitle: "Section header with links"
      }
    }
  }
}
