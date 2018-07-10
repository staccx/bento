import React, { Component } from "react"
import {
  Heading,
  Text,
  Divider,
  Table,
  RadioPillItem,
  RadioPill
} from "@staccx/base"
import beautify from "xml-beautifier"
import reactElementToJSXString from "react-element-to-jsx-string"
import ReactDOMServer from "react-dom/server"
import { VARIANT_DEFAULT, ThemeConsumer } from "@staccx/theme"
import PropTypes from "prop-types"
import props from "../generated/props.json"
import source from "../generated/source.json"
import ComponentSource from "./ComponentSource"
import RenderedSource from "./RenderedSource"
import PropertiesTable from "./PropertiesTable"
import RenderVariants from "./RenderVariants"

const tabs = {
  preview: "preview",
  source: "source",
  sourceComponent: "source-component",
  sourceExample: "source-example",
  a11y: "A11y"
}

const getVariants = (theme, name) => {
  const variants = theme.hasOwnProperty(name)
    ? Reflect.ownKeys(theme[name]).map(key => ({
        name: key,
        value: theme[name][key]
      }))
    : []

  if (!variants.some(v => v.name === VARIANT_DEFAULT)) {
    variants.push({ name: VARIANT_DEFAULT, value: "" })
  }
  return variants
}
class PreviewComponent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      variant: VARIANT_DEFAULT,
      tab: tabs.preview,
      componentState: {}
    }
    this.setComponentState = this.setComponentState.bind(this)
  }

  setComponentState(state) {
    this.setState({
      componentState: {
        ...this.state.componentState,
        ...state
      }
    })
  }

  render() {
    const { component } = this.props.component
    const componentProps = props[component.name]

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

        <PropertiesTable props={componentProps.props} />

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
            <RadioPillItem id={"example"} value={tabs.sourceExample}>
              Source example
            </RadioPillItem>
            <RadioPillItem id={"a11y"} value={tabs.a11y}>
              A11y
            </RadioPillItem>
          </RadioPill>
        </React.Fragment>
        <ThemeConsumer themeName={this.props.componentThemeName}>
          {({ theme, themes }) => {
            switch (this.state.tab) {
              case tabs.preview: {
                return (
                  <RenderVariants
                    component={this.props.component}
                    theme={theme}
                    themeName={this.props.componentThemeName}
                    themes={themes}
                    setComponentState={this.setComponentState}
                  />
                )
              }

              case tabs.source: {
                return <ComponentSource code={source[component.name]} />
              }

              case tabs.sourceComponent: {
                const code = reactElementToJSXString(
                  this.props.component.render()
                )
                return <RenderedSource code={code} />
              }

              case tabs.sourceExample: {
                const code = ReactDOMServer.renderToString(
                  this.props.component.render()
                )
                return <RenderedSource code={beautify(code)} />
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
