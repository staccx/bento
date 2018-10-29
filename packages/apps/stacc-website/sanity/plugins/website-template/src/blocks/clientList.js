export default {
  type: "object",
  name: "clientList",
  title: "Client List",
  description: "List of all clients",
  fields: [
    {
      type: "string",
      name: "sortBy",
      title: "sortBy. No need to fill this out. Default is area"
    }
  ],
  preview: {
    select: {
      title: "Client List"
    }
  }
}
