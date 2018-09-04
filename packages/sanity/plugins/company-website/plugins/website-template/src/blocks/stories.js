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
      title: "list[0].title"
    }
  }
}
