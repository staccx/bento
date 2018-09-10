export default {
  type: "document",
  name: "teamPage",
  title: "Page: Team",
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
        slugify: () => `/team`
      }
    },
    {
      type: "section",
      name: "header",
      title: "Top section"
    }
  ],
  preview: {
    select: {
      title: "header.head.title",
      subtitle: "body",
      media: "image"
    }
  }
}
