export default {
  type: "object",
  name: "linkBlock",
  title: "Link block",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "text",
      name: "body",
      title: "Body"
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
          to: [
            { type: "page" },
            { type: "homePage" },
            { type: "teamPage" },
            { type: "productPage" },
            { type: "servicePage" },
            { type: "clientsPage" }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection, options) {
      const { title } = selection
      return {
        title: title,
        subtitle: "Link blocks"
      }
    }
  }
}
