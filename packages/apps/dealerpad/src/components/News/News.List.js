import React from "react"
import { Link } from "react-router-dom"
import { Box, List, Heading } from "@staccx/base"

const NewsList = ({ articles }) => (
  <div>
    <Box size="flush">
      <List variant="newsList" ordered>
        {articles.map(article => (
          <li key={article.url}>
            <div>
              <Link to={article.actionUrl}>{article.title}</Link>
            </div>
          </li>
        ))}
      </List>
    </Box>
    <Link to="#">Les mer</Link>
  </div>
)

export default NewsList
