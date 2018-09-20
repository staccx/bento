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
import copy from "copy-to-clipboard"
import PropTypes from "prop-types"
import TerminalWindow from "./TerminalWindow"
const electron = window.require("electron")

class Package extends Component {
  state = {
    isBuilding: false,
    log: "",
    error: null
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
        // this.setState({ log: this.state.log + data.log })
        this.terminalWindow.current.write(data.log)
      }
    })

    this.terminalWindow = React.createRef()

    this.runScript = this.runScript.bind(this)
    this.showInFolder = this.showInFolder.bind(this)
    this.openIDE = this.openIDE.bind(this)
    this.openWithCode = this.openWithCode.bind(this)
    this.openWithWebstorm = this.openWithWebstorm.bind(this)
    this.link = this.link.bind(this)
    this.emit = this.emit.bind(this)
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  runScript(script) {
    this.emit("run script", {
      pkg: this.props.pkg.name,
      script: script
    })
    this.setState({ isBuilding: true, log: "" })
  }

  showInFolder() {
    electron.shell.showItemInFolder(this.props.pkg.location)
  }

  openWithCode() {
    this.openIDE("code")
  }

  openWithWebstorm() {
    this.openIDE("webstorm")
  }

  openIDE(ide) {
    // this.props.socket.emit("exec raw", `${ide} ${this.props.pkg.location}`)
    this.emit("exec raw", `${ide} ${this.props.pkg.location}`)
  }

  link() {
    this.emit("run exec", {
      pkg: this.props.pkg.name,
      script: "yarn link"
    })
    copy(`yarn link ${this.props.pkg.name}`)
  }

  emit(id, data) {
    this.props.socket.emit(id, data)
  }

  render() {
    if (this.state.error) {
      console.log(this.state.error)
      return (
        <div>
          <h2>{"Oh-no! Something went wrong"}</h2>
          <p className="red">
            {this.state.error && this.state.error.toString()}
          </p>
          <div>{"Component Stack Error Details: "}</div>
          <p className="red">{this.state.errorInfo.componentStack}</p>
        </div>
      )
    }
    const { pkg } = this.props

    return (
      <LayoutItem variant={"fourByFour"}>
        <Heading>{pkg.name}</Heading>
        <Paragraph>{pkg.version}</Paragraph>
        <Paragraph>{pkg.private ? "not on npm" : "on npm"}</Paragraph>
        <Paragraph>{`Location: ${pkg.location}`}</Paragraph>

        {this.state.isBuilding && (
          <React.Fragment>
            <Loading />
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
                    <RadioPillItem key={script} id={script} value={script}>
                      <Text>{script}</Text>
                    </RadioPillItem>
                  ))}
              </RadioPill>
            </ExpandListItem>
            <ExpandListItem title={"Dependencies"}>
              {this.props.pkg.dependencies.map(dep => (
                <Paragraph key={dep}>{dep}</Paragraph>
              ))}
            </ExpandListItem>
            <Button onClick={this.link}>Link</Button>
            <Button onClick={this.showInFolder}>Open in finder</Button>
            <Button onClick={this.openWithCode}>Open in Code</Button>
            <Button onClick={this.openWithWebstorm}>Open in Webstorm</Button>
          </React.Fragment>
        )}
        <TerminalWindow
          ref={this.terminalWindow}
          show={this.state.isBuilding}
        />
      </LayoutItem>
    )
  }
}

Package.propTypes = {}

const PackageLoading = styled(Loading)`
  position: absolute;
`

export default Package
