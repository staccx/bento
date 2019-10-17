import React from "react"
import { storiesOf } from "@storybook/react"
import Form from "./Form"
import FormField from "./FormField"
import Input from "../Input/Input"

storiesOf("Components|Base/Forms/Form", module).add("With FormField", () => (
  <Form initialValues={{ epost: "" }} buttonText="Søk nå">
    <FormField
      name="epost"
      type="email"
      required
      rnderError={({ error, touched }) => (
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
))
