import React, { Component } from "react"
import {
  Heading,
  Text,
  Divider,
  Table,
  Paragraph,
  Select,
  RadioPillItem,
  RadioPill
} from "@staccx/base"
import { VARIANT_DEFAULT, ThemeProvider, ThemeConsumer } from "@staccx/theme"
import PropTypes from "prop-types"
import props from "../generated/props.json"
import ComponentDocumentation from "./ComponentDocumentation"
import { typeToString, valueToString } from "../utils"

const tabs = {
  preview: "preview",
  source: "source",
  sourceComponent: "source-component",
  a11y: "A11y"
}
class PreviewComponent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      variant: VARIANT_DEFAULT,
      tab: tabs.preview
    }
  }

  render() {
    const { component } = this.props.component
    const componentProps = props[component.name]

    const data = Reflect.ownKeys(componentProps.props).map(key => {
      const prop = componentProps.props[key]
      const { type, defaultValue, required } = prop
      return {
        name: key,
        type: typeToString(type),
        required: required || type.name.endsWith(".isRequired"),
        defaultValue
      }
    })

    const themeProps = component.themeProps
      ? Reflect.ownKeys(component.themeProps).map(key => {
          const themeProp = component.themeProps[key]
          return themeProp
        })
      : []

    return (
      <div>
        <Heading>{this.props.component.title}</Heading>
        <Text>{this.props.component.description}</Text>

        <Divider />

        <Table data={data}>
          {({ item }) => (
            <React.Fragment>
              <td>
                <Text>{item.name}</Text>
                <Paragraph>{item.description}</Paragraph>
              </td>
              <td>{item.type}</td>
              <td>{item.required ? "yes" : "no"}</td>
              <td>{item.defaultValue && valueToString(item.defaultValue)}</td>
            </React.Fragment>
          )}
        </Table>

        <Table data={themeProps}>
          {({ item }) => (
            <React.Fragment>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.type}</td>
            </React.Fragment>
          )}
        </Table>

        <React.Fragment>
          <RadioPill
            group={"tabs"}
            onChange={e => this.setState({ tab: e.target.value })}
          >
            <RadioPillItem id={"preview"} value={tabs.preview} defaultChecked>
              Preview
            </RadioPillItem>
            <RadioPillItem id={"Source"} value={tabs.source}>
              Source
            </RadioPillItem>
            <RadioPillItem id={"component"} value={tabs.sourceComponent}>
              Source-component
            </RadioPillItem>
            <RadioPillItem id={"a11y"} value={tabs.a11y}>
              A11y
            </RadioPillItem>
          </RadioPill>
        </React.Fragment>
        <ThemeConsumer themeName={this.props.componentThemeName}>
          {({ theme, themes }) => {
            const variants = theme.hasOwnProperty(component.name)
              ? Reflect.ownKeys(theme[component.name]).map(key => ({
                  name: key,
                  value: theme[component.name][key]
                }))
              : []

            if (!variants.some(v => v.name === VARIANT_DEFAULT)) {
              variants.push({ name: VARIANT_DEFAULT, value: "" })
            }
            return (
              <Select
                items={variants}
                itemToString={item => item.name}
                itemToKey={item => item.name}
                onChange={value => this.setState({ variant: value.name })}
              />
            )
          }}
        </ThemeConsumer>
        <ThemeConsumer themeName={this.props.componentThemeName}>
          {({ theme, themes }) => {
            switch (this.state.tab) {
              case tabs.preview: {
                return (
                  <ThemeProvider
                    themeName={this.props.componentThemeName}
                    themes={themes}
                  >
                    <div>
                      <ComponentDocumentation width={"320px"}>
                        {this.props.component.render({
                          ...this.props,
                          variant: this.state.variant
                        })}
                      </ComponentDocumentation>
                    </div>
                  </ThemeProvider>
                )
              }
              default: {
                return <div>Not implemented yet</div>
              }
            }
          }}
        </ThemeConsumer>
      </div>
    )
  }
}

PreviewComponent.propTypes = {
  component: PropTypes.any.isRequired
}

export default PreviewComponent
