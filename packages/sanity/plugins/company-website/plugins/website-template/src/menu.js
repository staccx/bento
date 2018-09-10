export default {
  type: "document",
  name: "menu",
  title: "Data: Menu",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "array",
      name: "links",
      title: "MenuItems",
      of: [{ type: "menuItem" }]
    },
    {
      type: "array",
      name: "inverted",
      title: "Invert routes",
      of: [{ type: "string" }]
    }
  ]
}
