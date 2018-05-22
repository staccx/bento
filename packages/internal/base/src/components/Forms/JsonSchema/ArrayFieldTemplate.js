import React from "react"
import Label from "../Label/Label"
import CheckBox from "../CheckBox/CheckBox"

const ArrayFieldTemplate = props => {
  console.log(props)
  return (
    <div className={props.className}>
      <Label>{props.title}</Label>
      {props.schema.items.enumNames
        ? props.schema.items.enumNames.map((element, index) => {
            console.log(element)
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
        : console.error(
            "Enum doesn't have corresponding enumNames: https://github.com/mozilla-services/react-jsonschema-form#custom-labels-for-enum-fields"
          )}
    </div>
  )
}

export default ArrayFieldTemplate
