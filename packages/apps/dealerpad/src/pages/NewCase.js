import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import {
  Heading,
  Box,
  Wrapper,
  List,
  Flag,
  LayoutItem,
  Button,
  ThemeComponent,
  theming
} from "@staccx/base"
import registerCase from "../data/registerCase"
import caseStore from "../data/store/caseStore"

const Home = ({ history }) => (
  <PageWrapper>
    <Box variant="newsHero">
      <Wrapper>
        <LayoutItem variant="fadeIn" delay={400}>
          <Heading level={1} variant="salesOverviewHeading">
            Opprett ny sak
          </Heading>
        </LayoutItem>
      </Wrapper>
    </Box>
    <Box variant="newCase">
      <Grid>
        <List>
          {registerCase.map((item, index) => (
            <li key={item.label}>
              <LayoutItem variant="fadeIn" delay={(index + 1) * 100 + 300}>
                <StyledLink to={item.path}>
                  <Flag small img={<ThemeComponent tagName={item.icon} />}>
                    {item.label}
                  </Flag>
                </StyledLink>
              </LayoutItem>
            </li>
          ))}
        </List>
        <Center>
          <div>
            <Left>
              <Button
                onClick={() =>
                  caseStore
                    .simulateNewCase()
                    .then(({ flowId }) =>
                      history.push("/new-case-created/" + flowId)
                    )
                }
              >
                Simulér ny sak
              </Button>
            </Left>
            <img src="/alfa-sak.png" alt="" />
          </div>
        </Center>
      </Grid>
    </Box>
  </PageWrapper>
)

const Left = styled.div`
  text-align: left;
  margin-bottom: ${theming.spacing.medium};
`

const PageWrapper = styled.div`
  display: grid;
  height: calc(100vh - 52px);
  grid-template-rows: auto 1fr;
`

const Grid = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 200px 1fr;
  grid-column-gap: ${theming.spacing.medium};
  grid-row-gap: ${theming.spacing.medium};
  > ul {
    padding-left: ${theming.spacing.medium};
  }
  @media only screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    li {
      display: inline-block;
      margin-right: ${theming.spacing.medium};
    }
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-align: left;
  display: block;
  padding: ${theming.spacing.small} 0;
  border-bottom: 1px solid ${theming.color.line};
  svg {
    width: ${theming.spacing.medium};
    fill: ${theming.color.primary};
    height: ${theming.spacing.medium};
  }
  @media only screen and (max-width: 760px) {
    border-bottom: 0px transparent solid;
    height: ${theming.targetSize.normal};
  }
`

export default withRouter(Home)
