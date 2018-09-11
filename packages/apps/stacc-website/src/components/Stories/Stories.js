import React from "react"
import PropTypes from "prop-types"
import { Layout } from "@staccx/base"
import Story from "./Stories.Story"

const Stories = ({ items }) => (
  <Layout>
    {items.map(item => (
      <Story
        heading={item.title}
        body={item.body}
        key={item._key}
        illustration={item.image}
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
