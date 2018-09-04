import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { dashIt } from "@staccx/formatting"
import { spacing } from "@staccx/theme"
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
        <ContentContainer>
          <BlockContent
            blocks={page.blocks}
            serializers={blockContentSerializer}
            renderContainerOnSingleChild
          />
        </ContentContainer>
      </div>
    )
  }
}

const ContentContainer = styled.div`
  * > {
    padding: 0 ${spacing("grid")};
  }
`

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page
