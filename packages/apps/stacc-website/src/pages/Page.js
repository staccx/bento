import React, { Component } from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { dashIt } from "@staccx/formatting"
import { Link } from "react-router-dom"

const resovleSubpageUrl = (page, subpage) =>
  `/${dashIt(page.path.current)}/${dashIt(subpage.title)}`

class Page extends Component {
  render() {
    let renderSubpage = null
    if (this.props.match) {
      const { subpage } = this.props.match.params

      renderSubpage = this.props.page.subpages.find(
        s => dashIt(s.title) === subpage
      )
    }
    return (
      <div>
        {this.props.page.subpages && (
          <ul>
            {this.props.page.subpages.map(subpage => (
              <li>
                <Link to={resovleSubpageUrl(this.props.page, subpage)}>
                  {subpage.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {renderSubpage && <Page page={renderSubpage} />}
        <BlockContent
          blocks={this.props.page.blocks}
          serializers={blockContentSerializer}
        />
      </div>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page
