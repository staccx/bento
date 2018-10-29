import * as JsSearch from "js-search"
import React from "react"
import PropTypes from "prop-types"

const reset = ({ documents, indices, indexer, term }) => {
  const searcher = new JsSearch.Search(indexer)
  indices.forEach(index => searcher.addIndex(index))
  searcher.addDocuments(documents)

  let result = documents
  if (term) {
    result = searcher.search(term)
  }

  return {
    result,
    documents,
    searcher,
    term
  }
}

class Search extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      ...reset(props),
      search: this.handleSearch
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.documents !== prevProps.documents) {
      const newState = { ...reset(this.props), term: this.state.term }
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(newState)
    }
  }

  handleSearch(term) {
    if (!term) {
      this.setState({ result: this.props.documents, term: null })
      return
    }
    const result = this.state.searcher.search(term)
    this.setState({ result, term })
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
