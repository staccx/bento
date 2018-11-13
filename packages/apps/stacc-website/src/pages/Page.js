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
import { Redirect, Route } from "react-router-dom"
import FourOFour from "./404"

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
    const { page, blockCredentials = {} } = this.props

    const { pathname } = window.location
    console.log(page.path.current, pathname)
    const shouldRender =
      page.path.current === pathname ||
      (page.subpages
        ? page.subpages.some(
            s =>
              dashIt(s.title) === pathname.substr(pathname.lastIndexOf("/") + 1)
          )
        : false)

    if (!shouldRender) {
      console.log("Should not render?")
      // We dont have a page, nor subpages. Early out 404
      return <FourOFour />
    }

    return (
      <React.Fragment>
        {page.subpages &&
          page.subpages.length > 0 && (
            <React.Fragment>
              <NavigationSubpage
                items={page.subpages}
                name={page.path.current}
                title={page.pageTitle || page.title}
              />
              <Route
                path={`${page.path.current}/:subpage`}
                render={({ match }) => {
                  const { subpage } = match.params

                  const renderSubpage = page.subpages
                    ? page.subpages.find(s => dashIt(s.title) === subpage)
                    : null

                  if (!renderSubpage) {
                    return <FourOFour />
                  }

                  return (
                    <BlockContent
                      blocks={renderSubpage.blocks}
                      serializers={blockContentSerializer}
                      renderContainerOnSingleChild
                      {...blockCredentials}
                    />
                  )
                }}
              />
              <Route
                exact
                path={`${page.path.current}`}
                render={() => {
                  return (
                    <Redirect
                      to={`${page.path.current}/${dashIt(
                        page.subpages[0].title
                      )}`}
                    />
                  )
                }}
              />
            </React.Fragment>
          )}
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
      </React.Fragment>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page
