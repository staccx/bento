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
      type: "url",
      name: "url",
      title: "Url to client website"
    },
    {
      type: "array",
      name: "caseStudies",
      title: "Case studies",
      of: [{ type: "caseStudy" }]
    },
    {
      type: "array",
      name: "products",
      title: "Products",
      of: [{ type: "reference", to: [{ type: "product" }] }]
    }
  ]
}
