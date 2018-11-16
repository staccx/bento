import imageAlignment from "./data/imageAlignment"

export default {
  type: "object",
  name: "story",
  title: "Story",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "richText",
      name: "body",
      title: "Body"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        {
          type: "string",
          name: "alignment",
          title: "Alignment",
          options: {
            list: imageAlignment
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      media: "image",
      title: "title"
    }
  }
}
