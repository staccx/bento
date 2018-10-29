export default {
  type: "document",
  name: "feature",
  title: "Feature",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "reference",
      name: "product",
      title: "Product",
      to: [{ type: "product" }]
    }
  ]
}
