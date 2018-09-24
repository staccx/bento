import { Terminal } from "xterm"
import * as fit from "xterm/lib/addons/fit/fit"
import "xterm/lib/xterm.css"
import React, { Component } from "react"
import PropTypes from "prop-types"
import { terminalTheme } from "../theme/Theme"
import socket  from "../socket"

Terminal.applyAddon(fit)

class TerminalWindow extends Component {
  constructor(props, context) {
    super(props, context)

    this.terminal = new Terminal({ theme: terminalTheme })
    this.container = React.createRef()

    socket.on("log", data => {
      console.log("Received data for", this.props.name)
      if (data.pkg === this.props.name) {
        // this.setState({ log: this.state.log + data.log })
        this.terminal.write(data.log)
      }
    })

    console.log("Created", props)
    this.write = this.write.bind(this)
  }

  componentDidMount() {
    this.terminal.open(this.container.current)
    this.terminal.writeln(this.props.name)
  }

  write(output) {
    this.terminal.write(output)
  }

  render() {
    return <div ref={this.container} />
  }
}

TerminalWindow.propTypes = {
  name: PropTypes.string.isRequired
}

export default TerminalWindow
