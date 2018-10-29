export default {
  type: "object",
  name: "featureList",
  title: "Feature List",
  fields: [
    {
      type: "array",
      name: "features",
      title: "Features",
      of: [{ type: "feature" }]
    }
  ],
  preview: {
    select: {
      title: "features[0].title",
      length: "features.length"
    },
    prepare(selection, options) {
      const { title, length } = selection
      return {
        title: title + " (" + length + " total features)",
        subtitle: "Feature list"
      }
    }
  }
}
