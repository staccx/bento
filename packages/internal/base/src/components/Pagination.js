import React from "react"
import PropTypes from "prop-types"

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      items: props.items.slice(0, props.itemsPerPage),
      currentIndex: props.startIndex,
      pageCount: Math.ceil(props.items.length / props.itemsPerPage),
      nextPage: () => this.resolveItems(props.startIndex + 1),
      previousPage: null,
      page: props.startIndex + 1
    }
  }

  resolveItems(currentIndex) {
    const start = currentIndex * this.props.itemsPerPage
    this.setState({
      currentIndex,
      page: currentIndex + 1,
      items: this.props.items.slice(start, start + this.props.itemsPerPage),
      nextPage:
        currentIndex < this.state.pageCount - 1
          ? () => this.resolveItems(currentIndex + 1)
          : null,
      previousPage:
        currentIndex > 0 ? () => this.resolveItems(currentIndex - 1) : null
    })
  }

  render() {
    return this.props.children({ ...this.state })
  }
}

export default Pagination

Pagination.propTypes = {
  children: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number,
  startIndex: PropTypes.number
}

Pagination.defaultProps = {
  itemsPerPage: 10,
  startIndex: 0
}
