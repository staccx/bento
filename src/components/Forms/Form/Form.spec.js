import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import { render, screen } from "@testing-library/react"
import Form from "./Form"
import FormField from "./FormField"
import Input from "../Input/Input"

describe("Form", () => {
  describe("Snapshots", () => {
    it("Email", () => {
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
    it("Form", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Form initialValues={{ epost: "" }} buttonText="Søk nå">
              <FormField
                name="epost"
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
    it("Form", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Form initialValues={{ epost: "" }} buttonText="Søk nå">
              <FormField
                name="epost"
                type="date"
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
    it("url", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Form initialValues={{ epost: "" }} buttonText="Søk nå">
              <FormField
                name="epost"
                type="url"
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
    it("bool", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Form initialValues={{ epost: "" }} buttonText="Søk nå">
              <FormField
                name="epost"
                type="bool"
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
    it("number", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Form initialValues={{ epost: "" }} buttonText="Søk nå">
              <FormField
                name="epost"
                type="number"
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
    it("string", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Form initialValues={{ epost: "" }} buttonText="Søk nå">
              <FormField
                name="epost"
                type="string"
                min={0}
                max={100}
                integer
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

describe("Rendering", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Form initialValues={{ epost: "" }} buttonText="Søk nå">
          <FormField
            name="epost"
            type="string"
            min={0}
            max={100}
            integer
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
    expect(screen.getByPlaceholderText("ola@nordmann.no")).toBeInTheDocument()
  })
})
