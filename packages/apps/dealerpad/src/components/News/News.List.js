import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Box, List, Layout, ThemeComponent } from "@staccx/base"
import { IconWrapper } from "../Cases/Cases.List"

const NewsList = ({ articles }) => (
  <Layout rowGap="small">
    <Box size="flush">
      <List variant="newsList" ordered>
        {articles.map(article => (
          <li key={article.actionUrl}>
            <LinkWrapper>
              <Link to={article.actionUrl}>{article.title}</Link>{" "}
              <IconWrapper>
                <ThemeComponent tagName="ArrowRight" />
              </IconWrapper>
            </LinkWrapper>
          </li>
        ))}
      </List>
    </Box>
    <Link to="#">Les mer</Link>
  </Layout>
)

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default NewsList
