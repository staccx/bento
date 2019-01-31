import React from "react"
import * as types from "../types"

import { getWidget, getUiOptions, optionsList } from "../utils"
import { getDefaultRegistry } from "../getDefaultRegistry"

function BooleanField(props) {
  const {
    schema,
    uiSchema,
    idSchema,
    formData,
    registry = getDefaultRegistry(),
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onFocus,
    onBlur,
    rawErrors,
    label,
    help
  } = props
  const { widgets, formContext } = registry
  const { widget = "checkbox", ...options } = getUiOptions(uiSchema)
  const Widget = getWidget(schema, widget, widgets)

  let enumOptions

  if (Array.isArray(schema.oneOf)) {
    enumOptions = optionsList({
      oneOf: schema.oneOf.map(option => ({
        ...option,
        title: option.title || (option.const === true ? "yes" : "no")
      }))
    })
  } else {
    enumOptions = optionsList({
      enum: schema.enum || [true, false],
      enumNames:
        schema.enumNames ||
        (schema.enum && schema.enum[0] === false
          ? ["no", "yes"]
          : ["yes", "no"])
    })
  }

  return (
    <Widget
      options={{ ...options, enumOptions }}
      schema={schema}
      id={idSchema && idSchema.$id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      label={label}
      help={help}
      value={formData}
      required={required}
      disabled={disabled}
      readonly={readonly}
      registry={registry}
      formContext={formContext}
      autofocus={autofocus}
      rawErrors={rawErrors}
    />
  )
}

if (process.env.NODE_ENV !== "production") {
  BooleanField.propTypes = types.fieldProps
}

BooleanField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
}

export default BooleanField
