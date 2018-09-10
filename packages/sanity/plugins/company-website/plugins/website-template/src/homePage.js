export default {
  type: "document",
  name: "homePage",
  title: "Page: Home",
  fields: [
    {
      type: "slug",
      name: "path",
      title: "Path",
      description: "read only",
      readOnly: true,
      options: {
        readonly: true,
        source: "name",
        maxLength: 96,
        auto: true,
        slugify: () => `/`
      }
    },
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
