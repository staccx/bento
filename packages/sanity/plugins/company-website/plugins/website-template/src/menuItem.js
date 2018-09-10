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
      type: "reference",
      name: "link",
      title: "Link",
      to: [
        { type: "page" },
        { type: "servicePage" },
        { type: "productPage" },
        { type: "homePage" },
        { type: "clientsPage" },
        { type: "teamPage" }
      ]
    },
    {
      type: "array",
      name: "submenu",
      title: "Submenu",
      of: [
        {
          type: "reference",
          name: "page",
          title: "Page",
          to: [
            { type: "page" },
            { type: "servicePage" },
            { type: "productPage" },
            { type: "homePage" },
            { type: "clientsPage" },
            { type: "teamPage" }
          ]
        }
      ]
    }
  ]
}
