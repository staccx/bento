export default {
  type: "object",
  name: "caseStudy",
  title: "Case Study",
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
      type: "reference",
      name: "link",
      title: "Link",
      to: [{ type: "page" }]
    },
    {
      type: "array",
      name: "products",
      title: "Products",
      of: [{ type: "reference", name: "product", to: [{ type: "product" }] }]
    }
  ]
}
