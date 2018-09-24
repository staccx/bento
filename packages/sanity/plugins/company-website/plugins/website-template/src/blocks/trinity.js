export default {
  type: "object",
  name: "trinity",
  title: "Trinity",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "object",
      name: "trinity",
      title: "Trinity",
      description: "NOTE: Should contain no more that 3 elements",
      fields: [
        {
          type: "array",
          name: "texts",
          title: "Texts",
          of: [
            {
              type: "object",
              fields: [
                {
                  type: "string",
                  name: "heading",
                  title: "Heading"
                },
                {
                  type: "text",
                  name: "body",
                  title: "body"
                }
              ]
            }
          ]
        }
      ],
      validation: Rule =>
        Rule.custom((desc, options) => {
          if (!desc) {
            return true
          }
          if (desc.texts.length > 3) {
            return "Can not contain more than 3 elements"
          }
          return true
        })
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection, options) {
      const { title } = selection
      return {
        title,
        subtitle: "Trinity"
      }
    }
  }
}
