import React, { Component } from "react"
import { Heading, Text, Divider, Table } from "@staccx/base"
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
import getVariants from "../utils/getVariants"
import tabs from "../data/tabs"
import ViewTab from "./ViewTab"

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
    const { component } = this.props
    const componentProps = props[component.component.name]

    const themeProps = component.component.themeProps
      ? Reflect.ownKeys(component.component.themeProps).map(key => {
          const themeProp = component.component.themeProps[key]
          return themeProp
        })
      : []

    return (
      <div>
        {component.title && <Heading>{component.title}</Heading>}
        {component.description && <Text>{component.description}</Text>}
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
        // Example | Variants | Usage | html-source | js-source
        <ViewTab onChange={e => this.setState({ tab: e.target.value })} />
        <ThemeConsumer themeName={this.props.componentThemeName}>
          {({ theme, themes }) => {
            switch (this.state.tab) {
              case tabs.preview: {
                return (
                  <RenderVariants
                    component={component}
                    variants={{
                      [VARIANT_DEFAULT]: {
                        name: "Default",
                        value: VARIANT_DEFAULT
                      }
                    }}
                    theme={theme}
                    themeName={this.props.componentThemeName}
                    themes={themes}
                    setComponentState={this.setComponentState}
                  />
                )
              }
              case tabs.variants: {
                return (
                  <RenderVariants
                    component={component}
                    variants={getVariants(
                      theme,
                      component.component.themeProps
                    )}
                    themeName={this.props.componentThemeName}
                    themes={themes}
                    setComponentState={this.setComponentState}
                  />
                )
              }
              case tabs.jsSource: {
                return (
                  <ComponentSource code={source[component.component.name]} />
                )
              }

              case tabs.usage: {
                const code = reactElementToJSXString(
                  component.render({ variant: VARIANT_DEFAULT })
                )
                return <RenderedSource code={code} />
              }

              case tabs.htmlSource: {
                const code = ReactDOMServer.renderToString(
                  component.render({ variant: VARIANT_DEFAULT })
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
