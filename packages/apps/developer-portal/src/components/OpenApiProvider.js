import PropTypes from "prop-types"
import React from "react"
import { Fetch, Loading } from "@staccx/base"
import { Provider } from "./context/openApi"
import findTags from "../utils/findTags"
import sortByTags from "../utils/sortByTags"
import convertSwaggerToOpenApi from "../utils/convertSwaggerToOpenApi"
import axios from "axios/index"
import { fromOpenApi } from "@staccx/code-generator"
import localforage from "localforage"

const mapData = item => {
  return convertSwaggerToOpenApi(item.data, {})
}

const preferredLangKey = "x-dev-portal-lang"

class OpenApiProvider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      preferredLanguage: "nodeRequest"
    }

    this.setPreferredLanguage = this.setPreferredLanguage.bind(this)
  }

  async componentWillMount() {
    const preferredLanguage =
      (await localforage.getItem(preferredLangKey)) || "nodeRequest"
    console.log(preferredLanguage)
    this.setState({ preferredLanguage })
  }

  async setPreferredLanguage(lang) {
    await localforage.setItem(preferredLangKey, lang)
    this.setState({ preferredLanguage: lang })
  }

  render() {
    const { preferredLanguage } = this.state
    return (
      <Fetch url={this.props.url} get={axios.get} mapData={mapData}>
        {({ data }) => {
          if (!data) {
            return <Loading />
          }
          const { openapi } = data
          if (!openapi) {
            // TODO: Give good error message, or possibly "Try again"
            return <div>Error</div>
          }

          const tags = findTags(openapi)
          const sorted = sortByTags(openapi, tags)

          const { components, info, servers } = openapi

          const codeGeneratorInputs = fromOpenApi(openapi)
          const { requestBodies, schemas, securitySchemes } = components
          return (
            <Provider
              value={{
                requestBodies,
                securitySchemes,
                schemas,
                openapi,
                tags,
                sorted,
                servers,
                components,
                info,
                codeGeneratorInputs,
                setPreferredLanguage: this.setPreferredLanguage,
                preferredLanguage
              }}
            >
              {this.props.children}
            </Provider>
          )
        }}
      </Fetch>
    )
  }
}

export default OpenApiProvider

OpenApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
  requestBodies: PropTypes.any,
  schemas: PropTypes.any,
  securitySchemes: PropTypes.any
}
