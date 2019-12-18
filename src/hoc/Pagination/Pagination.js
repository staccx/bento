import React from "react"
import PropTypes from "prop-types"

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      currentIndex: props.startIndex
    }
  }

  render() {
    const { currentIndex } = this.state

    const start = currentIndex * this.props.itemsPerPage

    const rest = this.props.items.slice(
      start + this.props.itemsPerPage,
      this.props.items.length
    )

    const end =
      rest.length <= this.props.fuzzyLimit
        ? this.props.items.length
        : start + this.props.itemsPerPage

    const items = this.props.items.slice(start, end)
    const pageCount = Math.ceil(
      (this.props.items.length - this.props.fuzzyLimit) /
        this.props.itemsPerPage
    )
    const result = {
      currentIndex,
      pageCount,
      items,
      nextPage:
        currentIndex < pageCount - 1
          ? () => this.setState({ currentIndex: currentIndex + 1 })
          : null,
      previousPage:
        currentIndex > 0
          ? () => this.setState({ currentIndex: currentIndex - 1 })
          : null,
      page: currentIndex + 1
    }
    return this.props.children({ ...result })
  }
}

export default Pagination

Pagination.propTypes = {
  children: PropTypes.func,
  fuzzyLimit: PropTypes.number,
  items: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number,
  startIndex: PropTypes.number
}

Pagination.defaultProps = {
  fuzzyLimit: 1,
  itemsPerPage: 10,
  startIndex: 0
}
