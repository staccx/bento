import React from "react"
import PropTypes from "prop-types"
import SchemaRenderer from "./SchemaRenderer"
import { Heading, Text, List, ExpandListItem } from "@staccx/base"
import findReference from "../utils/findReference"

class RequestBody extends React.Component {
  render() {
    const { requestBody, openapi } = this.props
    if (requestBody) {
      if (requestBody.$ref) {
        const ref = findReference(openapi, requestBody.$ref)
        if (!ref) {
          console.warn("no ref round", requestBody)
          return null
        }

        return <RequestBody openapi={openapi} requestBody={{ ...ref }} />
      }

      return (
        <div>
          <Heading>Request body</Heading>
          <Heading level={"h5"}>{requestBody.description}</Heading>
          <Text>{`Is required: ${requestBody.required ? "yes" : "no"}`}</Text>
          <List>
            {Object.keys(requestBody.content).map(key => (
              <ExpandListItem key={key} title={key}>
                <SchemaRenderer
                  schema={requestBody.content[key].schema}
                  name={key}
                />
              </ExpandListItem>
            ))}
          </List>
        </div>
      )
    }
    return null
  }
}

export default RequestBody

RequestBody.propTypes = {
  content: PropTypes.object,
  description: PropTypes.string,
  openapi: PropTypes.object,
  requestBody: PropTypes.object,
  required: PropTypes.bool
}
