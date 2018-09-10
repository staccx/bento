import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import { Heading, Box, Wrapper, LayoutItem } from "@staccx/base"

const Home = ({ match }) => (
  <PageWrapper>
    <Box variant="newsHero">
      <Wrapper>
        <LayoutItem variant="fadeIn" delay={400}>
          <Heading level={1} variant="salesOverviewHeading">
            Ny sak opprettet
          </Heading>
        </LayoutItem>
      </Wrapper>
    </Box>
    <Box variant="newCase">
      <Wrapper>
        <StyledLink to={"/sales/" + match.params.flowId}>Gå til sak</StyledLink>
      </Wrapper>
    </Box>
  </PageWrapper>
)

const PageWrapper = styled.div`
  display: grid;
  height: calc(100vh - 52px);
  grid-template-rows: auto 1fr;
`

const StyledLink = styled(Link)`
  color: #ffffff;
  border-width: 0;
  border-radius: 0px;
  padding: 6px 24px;
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  font-family: NordeaSansSmall;
  line-height: 32px;
  font-weight: 700;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease;
  border-radius: 44px;
  background-color: #00005e;
`

export default withRouter(Home)
