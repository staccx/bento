import React from "react"
import PropTypes from "prop-types"
import { Layout, Heading } from "@staccx/base"
import Story from "./Stories.Story"

const Stories = ({ items, heading }) => (
  <Layout rowGap="large">
    {heading && <Heading level={2}>{heading}</Heading>}
    {items.map((item, index) => (
      <Story
        heading={item.title}
        body={item.body}
        key={item._key}
        illustration={item.image}
        isReverse={index % 2 !== 0}
      />
    ))}
  </Layout>
)

Stories.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      image: PropTypes.shape,
      title: PropTypes.string,
      key: PropTypes.string
    })
  )
}

export default Stories
