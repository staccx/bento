export default {
  type: "document",
  name: "client",
  title: "Client",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "array",
      name: "features",
      title: "Features",
      of: [
        {
          type: "featureToggle"
        }
      ]
    },
    {
      type: "array",
      name: "products",
      title: "Products",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "reference",
              name: "product",
              to: [{ type: "product" }]
            },
            {
              type: "string",
              name: "feature"
            }
          ]
        }
      ]
    }
  ]
}
