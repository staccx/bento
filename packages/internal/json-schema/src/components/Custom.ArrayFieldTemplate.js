import React from "react"
import { Label, CheckBox } from "@staccx/base"

const CustomArrayFieldTemplate = props => (
  <div className={props.className}>
    <Label>{props.title}</Label>
    ermagerdh
    {props.schema.items.enumNames
      ? props.schema.items.enumNames.map((element, index) => {
          return (
            <CheckBox
              group={props.title}
              id={props.title + index}
              onChange={() => null}
              key={element + index}
              value={props.schema.items.enum[index]}
            >
              {element}
            </CheckBox>
          )
        })
      : props.schema.items.anyOf
      ? props.schema.items.anyOf.map((element, index) => {
          return (
            <CheckBox
              group={props.title}
              id={props.title + index}
              onChange={() => null}
              key={element.title + element.enum}
              value={element.enum[0]}
            >
              {element.title}
            </CheckBox>
          )
        })
      : console.error(
          "Your enum doesn't follow the pattern for https://github.com/mozilla-services/react-jsonschema-form#alternative-json-schema-compliant-approach or is missin enumNames: https://github.com/mozilla-services/react-jsonschema-form#custom-labels-for-enum-fields"
        )}
  </div>
)

export default CustomArrayFieldTemplate
