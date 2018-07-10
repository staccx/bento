import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { Heading, Box, Wrapper, Button, LayoutItem } from "@staccx/base"
import getCases from "../data/cases"
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
        <CasesList cases={getCases().slice(0, 5)} />
      </LayoutItem>
    </Wrapper>
  </React.Fragment>
)

export default MySales
