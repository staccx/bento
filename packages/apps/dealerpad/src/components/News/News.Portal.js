import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Box, Wrapper, LayoutItem, Portal, List } from "@staccx/base"
import { spacing, color } from "@staccx/theme"
import overviewLinks from "../../data/overviewLinks"

const NewsPortal = () => (
  <Box variant="overviewPortal">
    <Wrapper>
      <Grid>
        {overviewLinks.map((item, index) => (
          <li key={item.label}>
            <LayoutItem variant="fadeIn" delay={(index + 1) * 100 + 300}>
              <StyledLink to={item.path}>
                <Portal
                  tagName={item.icon}
                  label={item.label}
                  last={index === overviewLinks.length - 1}
                />
              </StyledLink>
            </LayoutItem>
          </li>
        ))}
      </Grid>
    </Wrapper>
  </Box>
)

const Grid = styled(List)`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.medium};
`

const StyledLink = styled(Link)`
  &:hover {
    div > div:first-child:first-of-type {
      background-color: ${color("primary")};
      border: none;
      svg {
        fill: ${color("white")};
      }
    }
  }
`

export default NewsPortal
