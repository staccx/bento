import React from "react"
import ReactDOM from "react-dom"

export class SubWindow extends React.Component {
  nativeWindowObject = null

  componentWillMount() {
    this.nativeWindowObject = window.open("")
  }

  render() {
    return this.nativeWindowObject && this.nativeWindowObject.document
      ? ReactDOM.createPortal(
          this.props.children,
          this.nativeWindowObject.document.body
        )
      : null
  }
}
