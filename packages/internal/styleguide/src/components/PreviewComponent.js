import React, { Component } from "react"
import { Heading, Text, Layout, LayoutItem, Box, theming } from "@staccx/base"
import reactElementToJSXString from "react-element-to-jsx-string"
import pretty from "pretty"
import wrap from "word-wrap"
import ReactDOMServer from "react-dom/server"
import { ThemeProvider } from "styled-components"
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
      variant: theming.VARIANT_DEFAULT,
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

    const componentPropArray = Reflect.ownKeys(componentProps.props || {})
      .map(key => ({
        ...componentProps.props[key],
        name: key
      }))
      .filter(prop => prop.type)

    const themeProps = preview.component.themeProps
      ? Reflect.ownKeys(preview.component.themeProps).map(key => {
          const themeProp = preview.component.themeProps[key]
          return {
            prop: themeProp,
            name: key,
            componentName: preview.component.name
          }
        })
      : []
    let content = null
    switch (this.state.tab) {
      case tabs.preview: {
        content = (
          <Layout variant="componentContent">
            <RenderVariants
              component={preview}
              variants={{
                [theming.VARIANT_DEFAULT]: {
                  name: "Default",
                  value: theming.VARIANT_DEFAULT
                }
              }}
              componentProps={componentPropArray}
              componentState={this.state.componentState}
              theme={this.props.theme}
              setComponentState={this.setComponentState}
              width={width}
            />
          </Layout>
        )
        break
      }
      case tabs.variants: {
        const variants = getVariants(
          this.props.theme,
          preview.component.themeProps || {}
        )
        console.log(variants)
        content = (
          <RenderVariants
            renderHeading
            component={preview}
            variants={variants}
            theme={this.props.theme}
            setComponentState={this.setComponentState}
            width={width}
          />
        )
        break
      }
      case tabs.jsSource: {
        content = (
          <Box variant="transparent">
            <ComponentSource code={source[preview.component.name]} />
          </Box>
        )
        break
      }

      case tabs.usage: {
        const code = reactElementToJSXString(
          preview.render({
            variant: theming.VARIANT_DEFAULT,
            ...this.state.componentState
          })
        )
        content = <RenderedSource code={code} />
        break
      }

      case tabs.htmlSource: {
        const code = ReactDOMServer.renderToString(
          preview.render(...this.state.componentState)
        )

        const wrappedCode = wrap(code, { width: 80 })
        const prettified = pretty(wrappedCode, { ocd: true })

        content = <RenderedSource code={prettified} />
        break
      }

      default: {
        content = <div>Not implemented yet</div>
        break
      }
    }
    return (
      <Layout paddingTop="large">
        {preview.title && <Heading>{preview.title}</Heading>}
        <Box variant="codeBlock" flush>
          <Layout variant="documentationApiExample">
            <LayoutItem>
              <Layout rowGap="large">
                {componentProps.description && (
                  <Text>{componentProps.description}</Text>
                )}
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
                  <ThemeProvider theme={this.props.theme}>
                    {content}
                  </ThemeProvider>
                </Box>

                {this.state.tab === tabs.preview &&
                  preview.renderExampleController && (
                    <Box variant="customProps">
                      {preview.renderExampleController({
                        setComponentState: this.setComponentState,
                        ...this.state.componentState
                      })}
                    </Box>
                  )}
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
