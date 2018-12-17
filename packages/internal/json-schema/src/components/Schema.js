import Form from "react-jsonschema-form"
import React from "react"
import styled from "styled-components"
import { Button, theming } from "@staccx/base"
import ArrayField from "./Custom.Fields.Array"
import CustomObjectFieldTemplate from "./Custom.ObjectFieldTemplate"
import CustomFieldTemplate from "./Custom.FieldTemplate"
import ErrorList from "./Custom.ErrorList"
import CustomFields from "./Custom.Fields"
import CustomWidgets from "./Custom.Widgets"
import SchemaField from "./Custom.SchemaField"

const Schema = ({
  schema,
  uiSchema,
  onSubmit,
  onError,
  onChange,
  children
}) => {
  return (
    <SchemaForm
      schema={schema}
      widgets={CustomWidgets}
      fields={CustomFields}
      uiSchema={uiSchema}
      onChange={onChange}
      onSubmit={({ formData }) => onSubmit(formData)}
      onError={onError}
      SchemaFieldTemplate={SchemaField}
      ArrayFieldTemplate={ArrayField}
      ObjectFieldTemplate={CustomObjectFieldTemplate}
      FieldTemplate={CustomFieldTemplate}
      ErrorList={ErrorList}
    >
      {children || <Button type={"submit"}>Submit</Button>}
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
