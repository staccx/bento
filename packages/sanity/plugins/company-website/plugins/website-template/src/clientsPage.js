export default {
  type: "document",
  name: "clientsPage",
  title: "Page: Clients",
  description:
    "Please do not make more than one. Will fix layout when Sanity releases Structure",
  fields: [
    {
      type: "sectionHead",
      name: "header",
      title: "Header"
    }
  ],
  preview: {
    select: {
      title: "header.title",
      subtitle: "header.body"
    }
  }
}
