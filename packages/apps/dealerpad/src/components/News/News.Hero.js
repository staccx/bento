import React from "react"
import { Link } from "react-router-dom"
import {
  Box,
  Wrapper,
  Layout,
  LayoutItem,
  Heading,
  Paragraph
} from "@staccx/base"

const NewsHero = ({ article }) => (
  <Box variant="hero" size="flush">
    <Wrapper>
      <Layout
        grid="fiftyFifty"
        paddingTop="large"
        paddingBottom="large"
        columnGap="huge"
      >
        <LayoutItem>
          <Heading level={1} variant="hero">
            {article.title}
          </Heading>
          <Paragraph variant="hero">{article.body}</Paragraph>
          <div>
            <Link to={article.actionUrl}>{article.actionText}</Link>
          </div>
        </LayoutItem>
        <LayoutItem>
          <img src={article.image} alt="" />
        </LayoutItem>
      </Layout>
    </Wrapper>
  </Box>
)

export default NewsHero
