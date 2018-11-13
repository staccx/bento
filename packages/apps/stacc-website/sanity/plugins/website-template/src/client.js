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
      type: "boolean",
      name: "hide",
      title: "Hide",
      description: "If true, this will not show on the website"
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
      title: "Url to client website",
      validation: Rule => Rule.required()
    },
    {
      type: "array",
      name: "caseStudies",
      title: "Case studies",
      of: [{ type: "reference", to: [{ type: "caseStudyPage" }] }]
    },
    {
      type: "array",
      name: "products",
      title: "Products",
      of: [{ type: "reference", to: [{ type: "product" }] }]
    }
  ]
}
