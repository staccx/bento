import React from "react"
import { Consumer } from "./context"

export default Component => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>{props => <Component {...this.props} {...props} />}</Consumer>
      )
    }
  }
}
