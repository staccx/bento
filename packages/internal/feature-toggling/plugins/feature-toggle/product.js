export default {
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name"
    },
    {
      type: "object",
      name: "config",
      title: "Config",
      fields: [
        {
          type: "array",
          name: "translationOverrides",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "original",
                  type: "reference",
                  to: [{ type: "translations" }]
                },
                {
                  type: "translationValue",
                  name: "override"
                }
              ],
              preview: {
                select: {
                  subtitle: "override",
                  title: "original.value"
                },
                prepare(selection) {
                  const { title, subtitle } = selection

                  return {
                    title: getLangPreview(title),
                    subtitle: getLangPreview(subtitle)
                  }
                }
              }
            }
          ]
        }
      ]
    }
  ]
}

const getLangPreview = val => {
  const t = val.length ? val[0] : {}
  const { _key, _type, ...langs } = t

  return langs[Object.keys(langs)[0]]
}
