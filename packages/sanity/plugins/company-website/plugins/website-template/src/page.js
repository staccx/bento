export default {
  type: "document",
  name: "page",
  title: "Pages",
  index: 0,
  fields: [
    { type: "string", name: "title", title: "Title" },
    {
      type: "slug",
      name: "path",
      title: "Path",
      options: {
        source: "title",
        maxLength: 96,
        auto: true
      }
    },
    {
      type: "array",
      name: "subpages",
      title: "Sub pages",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }],
          validation: Rule =>
            Rule.custom((desc, options) => {
              if (!desc || !desc._ref) {
                return true
              }

              return desc._ref === options.document._id.replace("drafts.", "")
                ? "Can not reference itself!"
                : true
            })
        }
      ]
    },
    {
      type: "blockContent",
      name: "blocks",
      title: "Blocks"
    }
  ]
}
