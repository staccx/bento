export default {
  type: "object",
  name: "peopleList",
  title: "People List with filter",
  description: "List of all people. With handy filter",
  fields: [
    {
      type: "string",
      name: "sortBy",
      title: "sortBy. No need to fill this out."
    }
  ],
  preview: {
    select: {
      title: "People List with Filter"
    }
  }
}
