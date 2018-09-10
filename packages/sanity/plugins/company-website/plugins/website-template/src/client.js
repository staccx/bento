export default {
  type: "document",
  name: "client",
  title: "Clients and Case Studies",
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
      of: [{ type: "caseStudyPage" }]
    },
    {
      type: "array",
      name: "products",
      title: "Products",
      of: [{ type: "reference", to: [{ type: "product" }] }]
    }
  ]
}
