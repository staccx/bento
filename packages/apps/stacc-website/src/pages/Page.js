import React, { Component } from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { dashIt } from "@staccx/formatting"
import {
  Hero,
  NavigationSubpage,
  SectionHead
} from "../components/_codeSplitting"

class Page extends Component {
  componentWillMount() {
    if (this.props.change) {
      const hideMenu = this.props.page._type === "campaignPage"
      if (hideMenu !== this.props.hideMenu) {
        this.props.change({
          hideMenu
        })
      }
    }
  }

  render() {
    const { match, page, blockCredentials = {} } = this.props
    let renderSubpage = null
    if (match) {
      const { subpage } = match.params

      renderSubpage = page.subpages
        ? page.subpages.find(s => dashIt(s.title) === subpage)
        : null
    }

    return (
      <div>
        {page.subpages &&
          page.subpages.length > 0 && (
            <NavigationSubpage
              items={page.subpages}
              name={page.path.current}
              title={page.pageTitle || page.title}
            />
          )}
        {renderSubpage && <Page page={renderSubpage} />}
        {page.hero && (
          <Hero
            heading={page.hero.title}
            lede={page.hero.body}
            trinity={page.hero.trinity}
          />
        )}
        {page.sectionHead && (
          <SectionHead
            heading={page.sectionHead.title}
            lede={page.sectionHead.body}
            trinity={page.sectionHead.trinity}
          />
        )}
        <BlockContent
          blocks={page.blocks}
          serializers={blockContentSerializer}
          renderContainerOnSingleChild
          {...blockCredentials}
        />
      </div>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page
