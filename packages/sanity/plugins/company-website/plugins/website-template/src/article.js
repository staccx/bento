export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "person" }
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "publishAsNews",
      title: "Should be publish?",
      description:
        "If left false, will not appear in 'news' but may be referenced in other lists with articles",
      validation: Rule => Rule.required(),
      type: "boolean"
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      person: "person.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { person } = selection
      return Object.assign({}, selection, {
        subtitle: person && `by ${person}`
      })
    }
  }
}
