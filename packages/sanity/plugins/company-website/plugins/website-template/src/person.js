import roles from "./roles"

export default {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "company",
      title: "Works for",
      type: "reference",
      to: [{ type: "company" }]
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: Rule =>
        Rule.custom(val => {
          if (/(0047|\+47|47)?\d{8}/.test(val)) {
            return true
          }
          return "Must be norwegian number?"
        }).required()
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.email("Must be email").required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: "imageSales",
      title: "Image Sales",
      description: "To be used for product pages",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          title: "Link",
          type: "object",
          fields: [
            {
              name: "url",
              title: "url",
              type: "url"
            },
            {
              name: "type",
              title: "type",
              type: "reference",
              to: [{ type: "socialLink" }]
            }
          ]
        }
      ]
    },
    {
      name: "roles",
      type: "array",
      title: "Roles",
      of: [
        {
          type: "string",
          options: {
            list: roles
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
}
// Name
//   - Company
//   - Role(s) (Management/Sales/Developer/Designers)
//   - Phone
//   - Email
//   - Image
//   - ImageSales (Kun relevant for de som skal frontes på produktsider etc)
