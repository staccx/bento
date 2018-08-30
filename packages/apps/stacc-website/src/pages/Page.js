import React, { Component } from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"

class Page extends Component {
  render() {
    return (
      <BlockContent
        blocks={this.props.page.blocks}
        serializers={blockContentSerializer}
      />
    )
  }
}

Page.propTypes = {}

export default Page
