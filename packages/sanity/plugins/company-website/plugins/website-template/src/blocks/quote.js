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
      }
    }
  ],
  preview: {
    select: {
      title: "subText",
      quote: "quote"
    },
    prepare(selection, options) {
      const { title, quote } = selection
      return {
        title: title + ": " + quote,
        subtitle: "Quote"
      }
    }
  }
}
