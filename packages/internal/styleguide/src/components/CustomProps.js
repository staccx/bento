import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  CheckBox,
  Input,
  CurrencyInput,
  Box,
  Slider,
  RadioPill,
  RadioPillItem,
  Wrapper,
  Label
} from "@staccx/base"
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

  renderProp(prop, componentState) {
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
      case "number": {
        const value = parseInt(
          prop.defaultValue ? prop.defaultValue.value || 10 : 10,
          10
        )
        return (
          <Wrapper>
            <Label>{prop.description}</Label>
            <Slider
              name={prop.name}
              min={0}
              max={value * 2}
              value={componentState[prop.name]}
              step={Math.floor(value * 0.01)}
              onChange={e =>
                this.setComponentState(prop, parseInt(e.target.value, 10))
              }
            />
          </Wrapper>
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
        const funcs = [
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
        ]

        const findFunc = name => funcs.find(f => f.name === name)

        return (
          <RadioPill
            group={"funcs"}
            onChange={e =>
              this.setComponentState(prop, findFunc(e.target.value).value)
            }
            key={prop.name + "func"}
          >
            {funcs.map((item, index) => (
              <RadioPillItem
                id={item.name}
                key={item.name}
                value={item.name}
                defaultChecked={index === 0}
              >
                {item.name}
              </RadioPillItem>
            ))}
          </RadioPill>
        )
      }
      case "enum": {
        return (
          <RadioPill
            group={"enums"}
            onChange={e => this.setComponentState(prop, e.target.value)}
            key={prop.name + "func"}
          >
            {prop.type.value
              .map(item => removeToddles(item.value))
              .map(item => (
                <RadioPillItem id={item} key={item} value={item}>
                  {item}
                </RadioPillItem>
              ))}
          </RadioPill>
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
    console.log(this.props.componentProps)
    if (!this.props.componentProps || this.props.componentProps.length === 0) {
      return null
    }
    if (this.props.renderExampleController) {
      return (
        <Box variant="customProps">
          {this.props.renderExampleController({
            setComponentState: this.props.setComponentState
          })}
        </Box>
      )
    }

    return (
      <Box variant="customProps">
        {this.props.componentProps.map(prop => {
          if (!stringIncludes(prop.description, "@export")) {
            return null
          }
          return this.renderProp(prop, this.props.componentState)
        })}
      </Box>
    )
  }
}

CustomProps.propTypes = {
  componentProps: PropTypes.array
}

export default CustomProps
