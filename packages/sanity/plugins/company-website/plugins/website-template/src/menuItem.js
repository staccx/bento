export default {
  type: "object",
  name: "menuItem",
  title: "Menu Item",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "boolean",
      name: "emphasized",
      title: "Is emphasized"
    },
    {
      type: "array",
      name: "link",
      title: "Link",
      of: [
        {
          type: "object",
          title: "String link",
          fields: [
            {
              type: "string",
              name: "url",
              title: "Url"
            }
          ]
        },
        {
          type: "reference",
          name: "page",
          title: "Page",
          to: [{ type: "page" }]
        }
      ],
      validation: Rule => Rule.max(1).required()
    }
  ]
}
