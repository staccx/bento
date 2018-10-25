import React from "react"
import {
  ThemeComponent,
  Heading,
  Box,
  Wrapper,
  Button,
  LayoutItem
} from "@staccx/base"
import CasesList from "../components/Cases/Cases.List"
import Search from "../components/Search/Search"

const MySales = () => (
  <React.Fragment>
    <LayoutItem variant="fadeIn" delay={400}>
      <Box variant="defaultHero">
        <Wrapper size="medium">
          <Heading level={1} variant="salesOverviewHeading">
            Mine salg
          </Heading>
        </Wrapper>
      </Box>
    </LayoutItem>

    <Wrapper size="medium">
      <LayoutItem variant="fadeUp" delay={400}>
        <Box variant="salesSearch">
          <Search placeholder="Søk i alle mine salg" />
          <Button variant="filter">
            <ThemeComponent tagName="Filter" />
            Filter
          </Button>
        </Box>
      </LayoutItem>
      <LayoutItem variant="fadeUp" delay={600}>
        <CasesList />
      </LayoutItem>
    </Wrapper>
  </React.Fragment>
)

export default MySales
