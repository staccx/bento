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
            <React.Fragment>
              {!renderSubpage && (
                <React.Fragment>
                  <NavigationSubpage
                    items={page.subpages}
                    name={page.path.current}
                    title={page.pageTitle || page.title}
                  />
                  <Route
                    path={`${page.path.current}/:subpage`}
                    render={({ match }) => <Page page={page} match={match} />}
                  />
                </React.Fragment>
              )}
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
        {renderSubpage && <Page page={renderSubpage} />}
        {!renderSubpage && (
          <React.Fragment>
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
        )}
      </div>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page
