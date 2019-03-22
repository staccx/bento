import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"
import i18n from "../i18n"

class Convert extends React.Component {
  render() {
    const { data, children, fallback, ...rest } = this.props
    return (
      <Consumer>
        {({ translate, initialized }) => {
          if (!initialized) {
            // Has not been initialized
            return null
          }
          if (!data) {
            if (!children) {
              throw new Error(
                "No data was provided and no children. Fallback not possible",
                fallback,
                rest
              )
            }
            return children(fallback)
          }

          const result = i18n.convert(data)
          if (typeof children === "function") {
            return children(result)
          }
          return result
        }}
      </Consumer>
    )
  }
}

Convert.propTypes = {
  data: PropTypes.object.isRequired,
  fallback: PropTypes.string
}

Convert.defaultProps = {
  fallback: "not available. check data"
}

export default Convert
