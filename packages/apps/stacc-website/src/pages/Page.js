import React, { Component } from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { dashIt } from "@staccx/formatting"
import { SanityImage } from "@staccx/sanity"
import {
  Hero,
  NavigationSubpage,
  SectionHead
} from "../components/_codeSplitting"
import { Helmet } from "react-helmet"

class Page extends Component {
  render() {
    const { match, page } = this.props
    let renderSubpage = null
    if (match) {
      const { subpage } = match.params

      renderSubpage = page.subpages
        ? page.subpages.find(s => dashIt(s.title) === subpage)
        : null
    }

    console.log(page.meta)

    return (
      <div>
        {page.meta && (
          <SanityImage image={page.meta.image}>
            {({ image }) => (
              <Helmet>
                <meta property="og:title" content={page.meta.title} />
                <meta
                  property="og:description"
                  content={page.meta.description}
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={page.meta.url} />
                <meta property="og:image" content={image.url()} />
              </Helmet>
            )}
          </SanityImage>
        )}
        {page.subpages &&
          page.subpages.length > 0 && (
            <NavigationSubpage
              items={page.subpages}
              name={page.path.current}
              title={page.name}
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
        />
      </div>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page
