import React from "react"
import { withRouter } from "react-router-dom"

class ScrollToTop extends React.Component {
  componentWillMount() {
    window.onpopstate = p => {
      setTimeout(() => window.scrollTo(0, 0), 50)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

export default withRouter(ScrollToTop)
