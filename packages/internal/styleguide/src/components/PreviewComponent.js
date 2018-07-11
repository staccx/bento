import React, { Component } from "react"
import { Heading, Text, Layout, LayoutItem, Box } from "@staccx/base"
import beautify from "xml-beautifier"
import reactElementToJSXString from "react-element-to-jsx-string"
import ReactDOMServer from "react-dom/server"
import { VARIANT_DEFAULT, ThemeConsumer } from "@staccx/theme"
import PropTypes from "prop-types"
import generatedProps from "../generated/props.json"
import source from "../generated/source.json"
import ComponentSource from "./ComponentSource"
import RenderedSource from "./RenderedSource"
import PropertiesTable from "./PropertiesTable"
import RenderVariants from "./RenderVariants"
import getVariants from "../utils/getVariants"
import tabs from "../data/tabs"
import ViewTab from "./ViewTab"
import ThemifyTable from "./ThemifyTable"
import CustomProps from "./CustomProps"

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
    const newState = {
      componentState: {
        ...this.state.componentState,
        ...state
      }
    }
    this.setState(newState)
  }

  render() {
    const { preview, width } = this.props
    const componentProps = generatedProps[preview.component.name]
      ? generatedProps[preview.component.name]
      : { props: {} }

    console.log(preview, "got component props", componentProps)

    const componentPropArray = Reflect.ownKeys(componentProps.props).map(
      key => ({
        ...componentProps.props[key],
        name: key
      })
    )

    const themeProps = preview.component.themeProps
      ? Reflect.ownKeys(preview.component.themeProps).map(key => {
          const themeProp = preview.component.themeProps[key]
          return themeProp
        })
      : []

    return (
      <React.Fragment>
        {preview.title && <Heading>{preview.title}</Heading>}
        <Box variant="codeBlock" flush>
          <Layout variant="documentationApiExample">
            <LayoutItem>
              <Layout rowGap="large">
                {preview.description && <Text>{preview.description}</Text>}
                <PropertiesTable props={componentProps.props} />
                <ThemifyTable data={themeProps} />
              </Layout>
            </LayoutItem>
            <LayoutItem variant="styleguidePreview" tab={this.state.tab}>
              <Layout variant="styleguideExamples">
                <ViewTab
                  onChange={e => this.setState({ tab: e.target.value })}
                />
                <Box variant="overflow">
                  <ThemeConsumer themeName={this.props.componentThemeName}>
                    {({ theme, themes }) => {
                      switch (this.state.tab) {
                        case tabs.preview: {
                          return (
                            <RenderVariants
                              component={preview}
                              variants={{
                                [VARIANT_DEFAULT]: {
                                  name: "Default",
                                  value: VARIANT_DEFAULT
                                }
                              }}
                              componentProps={componentPropArray}
                              componentState={this.state.componentState}
                              theme={theme}
                              themeName={this.props.componentThemeName}
                              themes={themes}
                              setComponentState={this.setComponentState}
                              width={width}
                            />
                          )
                        }
                        case tabs.variants: {
                          return (
                            <RenderVariants
                              component={preview}
                              variants={getVariants(
                                theme,
                                preview.component.themeProps
                              )}
                              themeName={this.props.componentThemeName}
                              themes={themes}
                              setComponentState={this.setComponentState}
                              width={width}
                            />
                          )
                        }
                        case tabs.jsSource: {
                          return (
                            <Box variant="transparent">
                              <ComponentSource
                                code={source[preview.component.name]}
                              />
                            </Box>
                          )
                        }

                        case tabs.usage: {
                          const code = reactElementToJSXString(
                            preview.render({ variant: VARIANT_DEFAULT })
                          )
                          return <RenderedSource code={code} />
                        }

                        case tabs.htmlSource: {
                          const code = ReactDOMServer.renderToString(
                            preview.render({ variant: VARIANT_DEFAULT })
                          )
                          return <RenderedSource code={beautify(code)} />
                        }

                        default: {
                          return <div>Not implemented yet</div>
                        }
                      }
                    }}
                  </ThemeConsumer>
                </Box>
                {this.state.tab === "Example" && (
                  <CustomProps
                    componentProps={componentPropArray}
                    setComponentState={this.setComponentState}
                  />
                )}
              </Layout>
            </LayoutItem>
          </Layout>
        </Box>
      </React.Fragment>
    )
  }
}

PreviewComponent.propTypes = {
  preview: PropTypes.any.isRequired
}

export default PreviewComponent
