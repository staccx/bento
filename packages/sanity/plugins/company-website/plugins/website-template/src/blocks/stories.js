export default {
  type: "object",
  name: "stories",
  title: "Story list",
  fields: [
    {
      type: "string",
      name: "heading",
      title: "Heading"
    },
    {
      type: "array",
      name: "list",
      title: "Stories",
      of: [{ type: "story" }]
    }
  ],
  preview: {
    select: {
      media: "list[0].image",
      length: "list.length",
      heading: "heading"
    },
    prepare(selection, options) {
      const { length, media, heading } = selection
      return {
        title: heading,
        media,
        subtitle: "Stories" + " (" + length + ")"
      }
    }
  }
}
