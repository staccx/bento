import Form from "react-jsonschema-form"
import React from "react"

const log = type => console.log.bind(console, type)

const JsonSchema = ({ schema }) => (
  <Form
    schema={schema}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
)

export default JsonSchema
