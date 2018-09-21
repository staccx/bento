import CompanyOrgInput from "./components/CompanyOrg"

export default {
  type: "document",
  name: "company",
  title: "Data: Stacc",
  description: "In use by people",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "object",
      name: "orgNr",
      title: "Organization Number (Org.nb)",
      inputComponent: CompanyOrgInput,
      fields: [
        {
          type: "string",
          name: "name",
          title: "Name"
        },
        {
          type: "number",
          name: "orgNo",
          title: "Org number"
        }
      ]
    },
    {
      type: "text",
      name: "address",
      title: "Address"
    },
    {
      type: "image",
      name: "logo",
      title: "Logo"
    },
    {
      type: "array",
      name: "outboundLinks",
      title: "Outbound links",
      of: [
        {
          type: "object",
          name: "outoundLink",
          title: "Outbound link",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title"
            },
            {
              type: "string",
              name: "url",
              title: "URL"
            }
          ]
        }
      ]
    }
  ]
}
