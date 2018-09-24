export default {
  type: "object",
  name: "logoSalad",
  title: "Logo Salad",
  fields: [
    {
      type: "array",
      name: "logos",
      title: "Logos",
      of: [
        {
          type: "object",
          name: "logo",
          title: "Logo",
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
              title: "Url to client website",
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}
