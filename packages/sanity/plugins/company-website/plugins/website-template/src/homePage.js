export default {
  type: "document",
  name: "homePage",
  title: "Page: Home",
  fields: [
    {
      type: "hero",
      name: "hero",
      title: "Hero"
    },
    {
      type: "array",
      name: "blocks",
      title: "Blocks",
      of: [{ type: "section" }, { type: "sectionHead" }, { type: "linkBlock" }]
    }
  ],
  preview: {
    select: {
      title: "hero.title",
      subtitle: "hero.body"
    }
  }
}
