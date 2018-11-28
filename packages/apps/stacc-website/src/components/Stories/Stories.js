import React from "react"
import PropTypes from "prop-types"
import { Layout, Heading } from "@staccx/base"
import { partition } from "@staccx/utils"
import Story from "./Stories.Story"
import styled from "styled-components"

const Stories = ({ items, heading }) => {
  const [sideBySides, rest] = partition(
    items,
    item =>
      item.image &&
      item.image.alignment &&
      item.image.alignment === "sideBySide"
  )

  return (
    <Layout rowGap="large">
      {heading && <Heading level={2}>{heading}</Heading>}
      {rest.map((item, index) => {
        return (
          <Story
            heading={item.title}
            body={item.body}
            key={item._key}
            image={item.image}
            isReverse={index % 2 !== 0}
          />
        )
      })}
      {sideBySides.length > 0 && (
        <Container>
          {sideBySides.map((item, index) => (
            <StoryWrapper key={item._key}>
              <Story
                heading={item.title}
                body={item.body}
                key={item._key}
                image={item.image}
                isReverse={index % 2 !== 0}
              />
            </StoryWrapper>
          ))}
        </Container>
      )}
    </Layout>
  )
}

const StoryWrapper = styled.div`
  flex-basis: 50%;
  min-width: 320px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

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
