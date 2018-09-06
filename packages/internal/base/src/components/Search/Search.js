import * as JsSearch from "js-search"
import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleSearch = this.handleSearch.bind(this)

    const searcher = new JsSearch.Search(props.indexer)
    props.indicises.forEach(index => searcher.addIndex(index))
    searcher.addDocuments(props.documents)

    this.state = {
      result: props.documents,
      search: this.handleSearch,
      searcher
    }
  }

  handleSearch(term) {
    const result = this.state.searcher.search(term)
    this.setState({ result })
  }

  render() {
    return this.props.children({ ...this.state })
  }
}

Search.propTypes = {
  children: PropTypes.func.isRequired,
  documents: PropTypes.array.isRequired,
  indexer: PropTypes.string,
  indicises: PropTypes.array.isRequired
}

export default Search

Search.defaultProps = {
  indexer: "search"
}
