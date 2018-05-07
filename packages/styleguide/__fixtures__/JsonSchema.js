import JsonSchema from "@staccx/base"

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
}
export default [
  {
    component: JsonSchema,
    themed: false,
    name: "No theme",
    props: {
      children: "Click me",
      onClick: value => console.log(`Select: ${value}`),
      schema
    }
  }
]

