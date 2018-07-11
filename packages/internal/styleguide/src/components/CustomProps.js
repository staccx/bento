import React, { Component } from "react"
import PropTypes from "prop-types"
import { CheckBox, Input, CurrencyInput, Select, Box } from "@staccx/base"
import { stringIncludes } from "@staccx/utils"
const removeToddles = value => value.replace(/"/g, "")

class CustomProps extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isEditing: false
    }

    this.renderProp = this.renderProp.bind(this)
    this.setComponentState = this.setComponentState.bind(this)
  }

  setComponentState(prop, value) {
    this.props.setComponentState({ [prop.name]: value })
  }

  renderProp(prop) {
    switch (prop.type.name) {
      case "bool": {
        return (
          <CheckBox
            key={prop.name}
            id={prop.name}
            onChange={e => this.setComponentState(prop, e.target.checked)}
          >
            {prop.name}
          </CheckBox>
        )
      }
      case "string": {
        return (
          <Input
            id={prop.name}
            label={`Edit prop ${prop.name}`}
            defaultValue={removeToddles(prop.defaultValue.value)}
            onChange={e => this.setComponentState(prop, e.target.value)}
          />
        )
      }
      case "union": {
        if (prop.type.value.some(t => t.name === "string")) {
          return (
            <Input
              id={prop.name}
              label={`Edit prop ${prop.name}`}
              defaultValue={removeToddles(prop.defaultValue.value)}
              onChange={e => this.setComponentState(prop, e.target.value)}
            />
          )
        }
        if (prop.type.value.some(t => t.name === "number")) {
          return (
            <CurrencyInput
              id={prop.name}
              label={`Edit prop ${prop.name}`}
              defaultValue={removeToddles(prop.defaultValue.value)}
              onChange={e => this.setComponentState(prop, e.target.value)}
            />
          )
        }
        break
      }
      case "func": {
        return (
          <Select
            label={`Edit prop ${prop.name}`}
            items={[
              {
                name: "console.log",
                value: () => console.log(`${prop.name} clicked`)
              },
              {
                name: "console.warn",
                value: () => console.warn(`${prop.name} warning`)
              },
              {
                name: "alert",
                value: () => alert(`${prop.name} warning`)
              }
            ]}
            combobox
            itemToString={item => item.name}
            itemToKey={item => item.name}
            onChange={item =>
              this.setComponentState(prop, item ? item.value : null)
            }
          />
        )
      }
      case "enum": {
        return (
          <Select
            key={prop.name}
            label={`Edit prop ${prop.name}`}
            items={prop.type.value.map(item => removeToddles(item.value))}
            onChange={val => this.setComponentState(prop, val)}
          />
        )
      }
      case "custom":
        // HACK
        if (stringIncludes(prop.type.raw, "themeProps")) {
          const type = prop.type.raw.split(".")[1]

          switch (type) {
            case "children":
              return (
                <Input
                  key={prop.name}
                  id={prop.name}
                  label={`Edit prop ${prop.name}`}
                  defaultValue={
                    prop.defaultValue
                      ? removeToddles(prop.defaultValue.value)
                      : undefined
                  }
                  onChange={e => this.setComponentState(prop, e.target.value)}
                />
              )
            default:
              console.log("not supported yet", type)
              break
          }
        }

        break
    }
  }

  render() {
    if (!this.props.componentProps) {
      return null
    }

    if (this.state.isEditing) {
      return <div />
    }

    return (
      <Box variant="customProps">
        {this.props.componentProps.map(prop => {
          if (!stringIncludes(prop.description, "@export")) {
            return null
          }
          return this.renderProp(prop)
        })}
      </Box>
    )
  }
}

CustomProps.propTypes = {
  componentProps: PropTypes.array
}

export default CustomProps
