export default {
  title: "Rich text",
  name: "richText",
  type: "object",
  fields: [
    {
      type: "array",
      name: "bodyContent",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" }
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" }
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      blocks: "bodyContent"
    },
    prepare(value) {
      const block = (value.blocks || []).find(block => block._type === "block")
      return {
        title: block
          ? block.children
              .filter(child => child._type === "span")
              .map(span => span.text)
              .join("")
          : "No content",
        subtitle: "Rich text"
      }
    }
  }
}
