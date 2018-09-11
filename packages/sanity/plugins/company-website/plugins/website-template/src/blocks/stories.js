export default {
  type: "object",
  name: "stories",
  title: "Story list",
  fields: [
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
      length: "list.length"
    },
    prepare(selection, options) {
      const { length, media } = selection
      return {
        title: length + " stories",
        media,
        subtitle: "Stories"
      }
    }
  }
}
