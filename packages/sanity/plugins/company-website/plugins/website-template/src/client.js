export default {
  type: "document",
  name: "client",
  title: "Clients",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "image",
      name: "logo",
      title: "Logo"
    },
    {
      type: "array",
      name: "products",
      title: "Products",
      of: [{ type: "reference", name: "product", to: [{ type: "product" }] }]
    }
  ]
}
