export default {
  type: "document",
  name: "menu",
  title: "Menu",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "array",
      name: "links",
      title: "Links",
      of: [{ type: "menuItem" }]
    }
  ]
}
