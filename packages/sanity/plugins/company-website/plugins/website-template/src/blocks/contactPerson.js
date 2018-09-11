export default {
  type: "object",
  name: "contactPerson",
  title: "Contact person",
  fields: [
    {
      type: "string",
      name: "heading",
      title: "Heading"
    },

    {
      type: "reference",
      name: "employee",
      title: "Employee",
      to: [{ type: "person" }]
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      media: "image",
      title: "heading"
    }
  }
}
