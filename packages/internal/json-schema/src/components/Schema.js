import Form from "react-jsonschema-form"
import React from "react"
import styled from "styled-components"
import { Button, theming } from "@staccx/base"
import CustomArrayFieldTemplate from "./Custom.ArrayFieldTemplate"
import CustomObjectFieldTemplate from "./Custom.ObjectFieldTemplate"
import CustomFieldTemplate from "./Custom.FieldTemplate"
import ErrorList from "./Custom.ErrorList"
import CustomFields from "./Custom.Fields"
import CustomWidgets from "./Custom.Widgets"

const Schema = ({ schema, uiSchema, onSubmit, onError, onChange }) => {
  return (
    <SchemaForm
      schema={schema}
      widgets={CustomWidgets}
      fields={CustomFields}
      uiSchema={uiSchema}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError}
      ArrayFieldTemplate={CustomArrayFieldTemplate}
      ObjectFieldTemplate={CustomObjectFieldTemplate}
      FieldTemplate={CustomFieldTemplate}
      ErrorList={ErrorList}
    >
      <Button type={"submit"}>Submit</Button>
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