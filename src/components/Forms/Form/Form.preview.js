import React from "react"
import Form from "./Form"
import FormField from "./FormField"
import Input from "../Input/Input"

const preview = {
  title: "Form",
  category: "Components/Forms",
  tags: ["component"],
  component: Form,
  render: props => (
    <Form initialValues={{ epost: "" }} buttonText="Søk nå" {...props}>
      <FormField
        name="epost"
        type="email"
        required
        renderError={({ error, touched }) => (
          <span>
            {error}-{touched}
          </span>
        )}
      >
        {({ name, field, form }) => (
          <Input {...field} placeholder="ola@nordmann.no" id={name} />
        )}
      </FormField>
    </Form>
  )
}

export default preview
