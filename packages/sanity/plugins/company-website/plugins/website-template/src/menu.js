export default {
  type: "document",
  name: "menu",
  title: "Data: Menu",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name",
      description: "For reference here"
    },
    {
      type: "string",
      name: "title",
      title: "Title"
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
  ],
  preview: {
    select: {
      title: "name"
    }
  }
}
