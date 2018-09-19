import React, { Component } from "react"
import {
  ExpandListItem,
  Button,
  Heading,
  Paragraph,
  Loading,
  LayoutItem,
  List
} from "@staccx/base"
import styled from "styled-components"
import PropTypes from "prop-types"

class Package extends Component {
  state = {
    isBuilding: false,
    log: ""
  }

  constructor(props, context) {
    super(props, context)

    this.props.socket.on("build ended", data => {
      if (data === props.pkg.name) {
        this.setState({ isBuilding: false })
      }
    })

    this.build = this.build.bind(this)
  }

  build() {
    this.props.socket.emit("build", this.props.pkg.name)
    this.setState({ isBuilding: true })
  }

  render() {
    const { pkg } = this.props

    return (
      <LayoutItem variant={"fourByFour"}>
        <Heading>{pkg.name}</Heading>
        <Paragraph>{pkg.version}</Paragraph>
        <Paragraph>{pkg.private ? "not on npm" : "on npm"}</Paragraph>
        <Paragraph>{`Location: ${pkg.location}`}</Paragraph>

        {this.state.isBuilding && (<React.Fragment><PackageLoading />Building</React.Fragment>}
        {!this.state.isBuilding && (
          <React.Fragment>
            <Button onClick={this.build}>Build</Button>
            <Button onClick={() => console.log("build it")}>Link</Button>
            <Button onClick={() => console.log("build it")}>
              Open in finder
            </Button>
            <Button onClick={() => console.log("build it")}>
              Open in Code
            </Button>
          </React.Fragment>
        )}
        <List>
          <ExpandListItem title={"Console"}>{this.state.log}</ExpandListItem>
        </List>
      </LayoutItem>
    )
  }
}

Package.propTypes = {}

const PackageLoading = styled(Loading)`
  position: absolute;
`

export default Package
