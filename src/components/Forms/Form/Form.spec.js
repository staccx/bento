import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Form from "./Form"
import FormField from "./FormField"
import Input from "../Input/Input"

describe("Form", () => {
  describe("Snapshots", () => {
    it("Form", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Form initialValues={{ epost: "" }} buttonText="Søk nå">
              <FormField
                name="epost"
                type="email"
                required
                renderError={({ error, touched }) => (
                  <span>
                    {error} {touched}
                  </span>
                )}
              >
                {({ name, field, form }) => (
                  <Input {...field} placeholder="ola@nordmann.no" id={name} />
                )}
              </FormField>
            </Form>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
