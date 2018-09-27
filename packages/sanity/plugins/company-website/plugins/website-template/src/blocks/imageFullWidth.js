export default {
  type: "object",
  name: "imageFullWidth",
  title: "Image full-width",
  fields: [
    {
      type: "string",
      name: "heading",
      title: "Heading"
    },
    {
      type: "image",
      name: "image",
      title: "Image",
      options: {
        hotspot: true
      },
      metadata: ["palette"]
    }
  ],
  preview: {
    select: {
      media: "image",
      title: "heading"
    }
  }
}
