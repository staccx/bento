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
    prepare(selection) {
      const { entries } = selection
      return {
        title: "entries[0].title",
        subtitle: entries.map(item => item.title + " ")
      }
    }
  }
}
