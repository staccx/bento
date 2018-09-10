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
    }
  ]
}
