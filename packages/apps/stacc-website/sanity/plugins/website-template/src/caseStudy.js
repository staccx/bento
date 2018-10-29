export default {
  type: "document",
  name: "caseStudy",
  title: "Case Study",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "text",
      name: "description",
      title: "Description"
    },
    {
      type: "array",
      name: "products",
      title: "Products",
      of: [{ type: "reference", name: "product", to: [{ type: "product" }] }]
    }
  ]
}
