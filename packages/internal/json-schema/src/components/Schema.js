import Form from "react-jsonschema-form"
import React, { useRef } from "react"
import styled from "styled-components"
import { Button, theming } from "@staccx/base"
import ArrayField from "./Custom.Fields.Array"
import CustomObjectFieldTemplate from "./Custom.ObjectFieldTemplate"
import CustomFieldTemplate from "./Custom.FieldTemplate"
import ErrorList from "./Custom.ErrorList"
import CustomFields from "./Custom.Fields"
import CustomWidgets from "./Custom.Widgets"
import CustomErrors from "./Custom.Errors"
// import validateFormData from "../validate"

const Schema = ({
  schema,
  uiSchema,
  onSubmit,
  onError,
  onChange,
  children,
  widgets = CustomWidgets,
  fields = CustomFields,
  html5Validation = false,
  transformErrors = CustomErrors,
  fieldTemplate = CustomFieldTemplate,
  errorList = ErrorList,
  ...props
}) => {
  const form = useRef(null)

  const validate = () => {
    if (!form.current) {
      return
    }
    const { formData, schema } = form.current.state
    if (!formData || !schema) return false
    const validation = form.current.validate(formData, schema, false, false)
    return validation.errors.length <= 0
  }

  let render = () => <Button type={"submit"}>Submit</Button>
  if (children) {
    if (typeof children === "function") {
      render = () => children({ validate })
    } else {
      render = () => children
    }
  }

  return (
    <SchemaForm
      ref={form}
      className={"root__element"}
      schema={schema}
      widgets={widgets}
      fields={fields}
      uiSchema={uiSchema}
      onChange={onChange}
      onSubmit={({ formData }) => onSubmit(formData)}
      onError={onError}
      noHtml5Validate={html5Validation}
      ArrayFieldTemplate={ArrayField}
      ObjectFieldTemplate={CustomObjectFieldTemplate}
      FieldTemplate={fieldTemplate}
      ErrorList={errorList}
      transformErrors={transformErrors}
      {...props}
    >
      {render()}
    </SchemaForm>
  )
}

Schema.themeProps = {
  form: {
    name: "JSON_SCHEMA_FORM",
    description: "Form component",
    type: theming.themePropTypes.style
  }
}

const SchemaForm = styled(Form)`
  ${theming.applyVariants(Schema.themeProps.form)};
`

export default Schema
