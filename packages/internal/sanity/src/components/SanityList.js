import PropTypes from "prop-types"
import React from "react"
import SanityQuery from "./SanityQuery"
import SanityQueryHelper from "sanity-query-helper"

const SanityList = ({ type, filter, count, pick, children, ...props }) => {
  const helper = new SanityQueryHelper({
    sanityOptions: {}
  })
  let query = helper
  if (type) {
    query = query.ofType(type)
  }
  if (filter) {
    query = query.doCompare(filter)
  }

  if (count) {
    query = query.select(0, count, true)
  }

  if (pick) {
    query = query.pick(pick)
  }

  return (
    <SanityQuery query={query.query} id={type} children={children} {...props} />
  )
}

export default SanityList

SanityList.propTypes = {
  children: PropTypes.func,
  count: PropTypes.number,
  filter: PropTypes.string,
  pick: PropTypes.string,
  type: PropTypes.string
}
