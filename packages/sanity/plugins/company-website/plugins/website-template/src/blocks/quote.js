export default {
  type: "object",
  name: "quote",
  title: "Quote",
  fields: [
    {
      type: "text",
      name: "quote",
      title: "Quote text"
    },
    {
      type: "string",
      name: "subText",
      title: "Subtext",
      description: "ex. Name Of Person, title"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: "subText",
      subTitle: "quote"
    }
  }
}
