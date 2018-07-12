import React, { Component } from "react"
import { Heading, Text, Layout, LayoutItem, Box } from "@staccx/base"
import reactElementToJSXString from "react-element-to-jsx-string"
import prettier from "prettier/standalone"
import parsers from "prettier/parser-babylon"
import wrap from "word-wrap"
import ReactDOMServer from "react-dom/server"
import { VARIANT_DEFAULT, ThemeConsumer } from "@staccx/theme"
import PropTypes from "prop-types"
import generatedProps from "../generated/props.json"
import source from "../generated/source.json"
import ComponentSource from "./ComponentSource"
import RenderedSource from "./RenderedSource"
import PropertiesTable from "./PropertiesTable"
import RenderVariants from "./RenderVariants"
import { getVariants } from "../utils"
import tabs from "../data/tabs"
import ViewTab from "./ViewTab"
import ThemifyTable from "./ThemifyTable"

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

    // console.log(preview, "got component props", componentProps)

    const componentPropArray = Reflect.ownKeys(componentProps.props)
      .map(key => ({
        ...componentProps.props[key],
        name: key
      }))
      .filter(prop => prop.type)

    const themeProps = preview.component.themeProps
      ? Reflect.ownKeys(preview.component.themeProps).map(key => {
          const themeProp = preview.component.themeProps[key]
          return themeProp
        })
      : []
    return (
      <Layout paddingTop="large">
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
                            <Layout variant="componentContent">
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
                            </Layout>
                          )
                        }
                        case tabs.variants: {
                          return (
                            <RenderVariants
                              renderHeading
                              component={preview}
                              variants={getVariants(
                                theme,
                                preview.component.themeProps || {}
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
                            preview.render({
                              variant: VARIANT_DEFAULT,
                              ...this.state.componentState
                            })
                          )
                          return <RenderedSource code={code} />
                        }

                        case tabs.htmlSource: {
                          const code = ReactDOMServer.renderToString(
                            preview.render(...this.state.componentState)
                          )

                          const prettified = prettier.format(
                            wrap(code, { width: 80 }),
                            {
                              plugins: [parsers],
                              proseWrap: "always",
                              printWidth: 1
                            }
                          )

                          return <RenderedSource code={prettified} />
                        }

                        default: {
                          return <div>Not implemented yet</div>
                        }
                      }
                    }}
                  </ThemeConsumer>
                </Box>
                <Box variant="customProps">
                  {this.state.tab === tabs.preview &&
                    preview.renderExampleController &&
                    preview.renderExampleController({
                      setComponentState: this.setComponentState,
                      ...this.state.componentState
                    })}
                </Box>
              </Layout>
            </LayoutItem>
          </Layout>
        </Box>
      </Layout>
    )
  }
}

PreviewComponent.propTypes = {
  preview: PropTypes.any.isRequired
}

export default PreviewComponent
