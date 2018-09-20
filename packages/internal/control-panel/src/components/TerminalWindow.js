import {Terminal} from "xterm"
import * as fit from "xterm/lib/addons/fit/fit"
import "xterm/lib/xterm.css"
import React, { Component } from "react"
import PropTypes from "prop-types"
import { terminalTheme } from "../theme/Theme"

Terminal.applyAddon(fit)

class TerminalWindow extends Component {
  constructor(props, context) {
    super(props, context)

    this.terminal = new Terminal({theme: terminalTheme})
    this.container = React.createRef()

    this.write = this.write.bind(this)
  }

  componentDidMount() {
    this.terminal.open(this.container.current)
    this.terminal.writeln("Ready")
  }

  write(output) {
    this.terminal.write(output)
  }

  render() {
    return (
      <div
        ref={this.container}
      />
    )
  }
}

TerminalWindow.propTypes = {}

export default TerminalWindow
