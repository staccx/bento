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
import CustomErrors from "./Custom.Errors"
import SchemaField from "./Custom.SchemaField"

const Schema = ({
  schema,
  uiSchema,
  onSubmit,
  onError,
  onChange,
  children,
  widgets = CustomWidgets,
  fields = CustomFields,
  html5Validation = false
}) => {
  return (
    <SchemaForm
      schema={schema}
      widgets={widgets}
      fields={fields}
      uiSchema={uiSchema}
      onChange={onChange}
      onSubmit={({ formData }) => onSubmit(formData)}
      onError={onError}
      noHtml5Validate={html5Validation}
      SchemaFieldTemplate={SchemaField}
      ArrayFieldTemplate={ArrayField}
      ObjectFieldTemplate={CustomObjectFieldTemplate}
      FieldTemplate={CustomFieldTemplate}
      ErrorList={ErrorList}
      transformErrors={CustomErrors}
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
