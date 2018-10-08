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
import { TranslatedText } from "@staccx/i18n"

const CarsFilter = ({
  cars,
  result,
  handleSearchMake,
  handleSearchPrice,
  handleSearchRange
}) => {
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
              <TranslatedText i18nKey="knapp-filter" />
            </Button>
            <Filter isOpen={isOpen}>
              <Box variant="filter">
                <Layout>
                  <TranslatedText i18nKey="input-filter-sok">
                    {translated => (
                      <Input
                        id="carSearch"
                        placeholder={translated}
                        variant="search"
                        onChange={e => handleSearchMake(e.target.value)}
                      />
                    )}
                  </TranslatedText>
                  <div>
                    <Label>
                      <TranslatedText i18nKey="label-filtrere-bil-maks-manedspris" />
                    </Label>
                    <Slider
                      name="totalMonthlyFilter"
                      max={maxPrice}
                      min={minPrice}
                      value={maxPrice}
                      onChange={e => handleSearchPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>
                      <TranslatedText i18nKey="label-filtrere-bil-min-rekkevidde" />
                    </Label>
                    <Slider
                      name="rangeFilter"
                      max={maxRange}
                      min={minRange}
                      value={minRange}
                      onChange={e => handleSearchRange(e.target.value)}
                    />
                  </div>
                </Layout>
                {result.length}{" "}
                <TranslatedText i18nKey="filtrere-bil-antall-biler-passer-dine-kriterier" />
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
  position: relative;
  z-index: 50;
`

export default CarsFilter
