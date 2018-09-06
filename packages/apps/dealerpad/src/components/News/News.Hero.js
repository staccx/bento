import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {
  Box,
  Wrapper,
  Layout,
  LayoutItem,
  Heading,
  Paragraph,
  Button
} from "@staccx/base"

const NewsHero = ({ article }) => (
  <Box variant="newsHero" size="flush">
    <Wrapper>
      <Layout
        grid="fiftyFifty"
        paddingTop="large"
        paddingBottom="large"
        columnGap="huge"
      >
        <LayoutItem variant="fadeUp" delay={400}>
          <Heading level={1} variant="hero">
            {article.title}
          </Heading>

          <Paragraph variant="hero">{article.body}</Paragraph>
          <Layout paddingTop="small">
            <div>
              <StyledLink to={article.actionUrl}>
                {article.actionText}
              </StyledLink>
            </div>
            <div>
              <Button variant="closeNews">Gjem nyhet</Button>
            </div>
          </Layout>
        </LayoutItem>
        <LayoutItem variant="fadeUp" delay={500}>
          <img src={article.image} alt="" />
        </LayoutItem>
      </Layout>
    </Wrapper>
  </Box>
)

const StyledLink = styled(Link)`
  text-decoration: underline;
`

export default NewsHero
