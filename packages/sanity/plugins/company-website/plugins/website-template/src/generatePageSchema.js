export default ({
  name,
  title,
  allowSubpages,
  slugPrefix,
  slugSource = "name",
  additionalFields = []
}) => ({
  type: "document",
  name,
  title,
  fields: [
    { type: "string", name: "name", title: "Name" },
    {
      type: "slug",
      name: "path",
      title: "Path",
      options: {
        source: slugSource,
        maxLength: 96,
        auto: true,
        slugify: input =>
          `${slugPrefix}${input
            .toLowerCase()
            .replace(/\s/g, "-")
            .slice(0, 200)}`
      }
    },
    ...(additionalFields || []),
    ...(allowSubpages
      ? [
          {
            type: "array",
            name: "subpages",
            title: "Sub pages",
            of: [
              {
                type: "subpage"
              }
            ]
          }
        ]
      : []),
    {
      type: "blockContent",
      name: "blocks",
      title: "Blocks"
    },
    {
      type: "meta",
      name: "meta",
      title: "Page Meta",
      description: "For Open Graph. For more see http://ogp.me/"
    }
  ]
})
