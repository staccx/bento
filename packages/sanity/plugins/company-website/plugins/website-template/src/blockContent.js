export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      type: "richText"
    },
    {
      type: "image",
      options: { hotspot: true }
    },
    { type: "featureList" },
    { type: "section" },
    { type: "sectionHead" },
    { type: "linkBlock" },
    { type: "productClients" },
    { type: "quote" },
    { type: "hero" },
    { type: "stories" },
    { type: "timeline" },
    { type: "contactPerson" },
    { type: "clientList" },
    { type: "peopleList" }
  ]
}
