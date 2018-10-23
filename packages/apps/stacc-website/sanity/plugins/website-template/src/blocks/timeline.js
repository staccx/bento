export default {
  type: "object",
  name: "timeline",
  title: "Timeline",
  fields: [
    {
      type: "array",
      name: "entries",
      title: "Entries",
      of: [
        {
          type: "object",
          name: "entry",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title"
            },
            {
              type: "string",
              name: "subtitle",
              title: "Subtitle"
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      length: "entries.length"
    },
    prepare(selection, options) {
      const { length } = selection
      return {
        title: "Timeline with " + length + " entries",
        subtitle: "Timeline"
      }
    }
  }
}
