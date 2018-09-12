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
    },
    {
      name: "imageCutout",
      title: "Image is cut out from background",
      type: "boolean"
    }
  ],
  preview: {
    select: {
      media: "image",
      title: "heading"
    },
    prepare(selection, options) {
      const { title, media } = selection
      return {
        title,
        media,
        subtitle: "Contact person"
      }
    }
  }
}
