import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { Heading, Box, Wrapper, Button } from "@staccx/base"
import getCases from "../data/cases"
import CasesList from "../components/Cases/Cases.List"
import Search from "../components/Search/Search"

const MySales = () => (
  <React.Fragment>
    <Box variant="defaultHero">
      <Wrapper size="medium">
        <Heading level={1}>Mine salg</Heading>
      </Wrapper>
    </Box>
    <Wrapper size="medium">
      <Box variant="salesSearch">
        <Search />
        <Button variant="filter">
          <ThemeComponent tagName={"filterIcon"} />
          Filter
        </Button>
      </Box>
      <CasesList cases={getCases().slice(0, 5)} />
    </Wrapper>
  </React.Fragment>
)

export default MySales
