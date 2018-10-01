import React from "react"
import styled from "styled-components"
import {
  Button,
  State,
  Layout,
  Input,
  Label,
  Slider,
  Box,
  hideVisually
} from "@staccx/base"

const CarsFilter = ({ cars }) => (
  <State>
    {({ change, isOpen = false }) => {
      return (
        <React.Fragment>
          <Button onClick={() => change({ isOpen: !isOpen })}>
            Filtrer biler
          </Button>
          {/* TODO: replace text */}
          <Filter isOpen={isOpen}>
            <Box variant="primary">
              <Layout>
                <Input placeholder="Søk" /> {/* TODO: replace text */}
                <div>
                  <Label>Totalpris per måned</Label> {/* TODO: replace text */}
                  <Slider name="totalMonthlyFilter" />
                </div>
                <div>
                  <Label>Rekkevidde</Label> {/* TODO: replace text */}
                  <Slider name="rangeFilter" />
                </div>
              </Layout>
            </Box>
          </Filter>
        </React.Fragment>
      )
    }}
  </State>
)

const Filter = styled.div`
  ${p => !p.isOpen && hideVisually};
`

export default CarsFilter
