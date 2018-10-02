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

const CarsFilter = ({ cars }) => {
  const maxPrice = Math.max.apply(Math, cars.map(car => car.pricePerMonth))
  const minPrice = Math.min.apply(Math, cars.map(car => car.pricePerMonth))
  const maxRange = Math.max.apply(Math, cars.map(car => car.range))
  const minRange = Math.min.apply(Math, cars.map(car => car.range))

  return (
    <State>
      {({ change, isOpen = false }) => {
        return (
          <React.Fragment>
            <Button onClick={() => change({ isOpen: !isOpen })}>
              Filtrer biler
            </Button>
            {/* TODO: replace text */}
            <Filter isOpen={isOpen}>
              <Box variant="filter">
                <Layout>
                  <Input placeholder="Søk" variant="search" />{" "}
                  {/* TODO: replace text */}
                  <div>
                    <Label>Maks månedspris</Label> {/* TODO: replace text */}
                    <Slider
                      name="totalMonthlyFilter"
                      max={maxPrice}
                      min={minPrice}
                      value={maxPrice}
                      onChange={e => console.log(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Min. rekkevidde</Label> {/* TODO: replace text */}
                    <Slider
                      name="rangeFilter"
                      max={maxRange}
                      min={minRange}
                      value={minRange}
                      onChange={e => console.log(e.target.value)}
                    />
                  </div>
                </Layout>
                {cars.length} biler passer dine kriterier
              </Box>
            </Filter>
          </React.Fragment>
        )
      }}
    </State>
  )
}

const Filter = styled.div`
  ${p => !p.isOpen && hideVisually};
`

export default CarsFilter
