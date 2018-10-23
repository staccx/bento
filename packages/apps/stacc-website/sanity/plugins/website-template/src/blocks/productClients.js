export default {
  type: "object",
  name: "productClients",
  title: "Product Clients",
  fields: [
    {
      type: "string",
      name: "Title",
      title: "Title"
    },
    {
      type: "array",
      name: "clients",
      title: "Clients",
      description: "Clients using product",
      of: [{ type: "reference", to: [{ type: "client" }] }]
    },
    {
      type: "reference",
      name: "product",
      title: "Product",
      description: "If no clients are used, this will populate the list.",
      to: [{ type: "product" }]
    }
  ]
}
