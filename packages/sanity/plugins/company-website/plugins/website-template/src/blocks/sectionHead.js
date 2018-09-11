export default {
  type: "object",
  name: "sectionHead",
  title: "Section head",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "boolean",
      name: "isPageHeader",
      title: "Page Header?"
    },
    {
      type: "text",
      name: "body",
      title: "Body"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],
  options: {
    collapsible: true,
    collapsed: false
  },
  preview: {
    select: {
      media: "image",
      title: "title"
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title,
        media: media,
        subtitle: "Section header"
      }
    }
  }
}
