import React, { Component } from "react"
import {
  ExpandListItem,
  Button,
  Heading,
  Paragraph,
  Loading,
  LayoutItem,
  List,
  RadioPillItem,
  RadioPill,
  Text
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

    this.props.socket.on("log", data => {
      if (data.pkg === props.pkg.name) {
        this.setState({ log: data.log })
      }
    })

    this.runScript = this.runScript.bind(this)
  }


  runScript(script) {
    this.props.socket.emit("run script", {
      pkg: this.props.pkg.name,
      script: script
    })
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

        {this.state.isBuilding && (
          <React.Fragment>
            <PackageLoading />
            Building
          </React.Fragment>
        )}
        {!this.state.isBuilding && (
          <React.Fragment>
            <ExpandListItem title={"Scripts"}>
              <RadioPill
                group={"scripts"}
                onChange={e => this.runScript(e.target.value)}
              >
                {this.props.pkg.scripts &&
                  this.props.pkg.scripts.map(script => (
                    <RadioPillItem id={script} value={script}>
                      <Text>{script}</Text>
                    </RadioPillItem>
                  ))}
              </RadioPill>
            </ExpandListItem>
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
