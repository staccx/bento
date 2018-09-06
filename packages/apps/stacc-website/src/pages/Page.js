import React, { Component } from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { dashIt } from "@staccx/formatting"
import NavigationSubpage from "../components/NavigationSubpage/NavigationSubpage"

class Page extends Component {
  render() {
    const { match, page } = this.props
    let renderSubpage = null
    if (match) {
      const { subpage } = match.params

      renderSubpage = page.subpages.find(s => dashIt(s.title) === subpage)
    }

    return (
      <div>
        {page.subpages &&
          page.subpages.length > 0 && (
            <NavigationSubpage items={page.subpages} name={page.title} />
          )}
        {renderSubpage && <Page page={renderSubpage} />}
        <BlockContent
          blocks={page.blocks}
          serializers={blockContentSerializer}
          renderContainerOnSingleChild
        />
      </div>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page
