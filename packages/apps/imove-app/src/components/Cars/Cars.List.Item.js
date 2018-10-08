import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Heading, Box, Layout } from "@staccx/base"
import { color, font } from "@staccx/theme"
import { TranslatedText } from "@staccx/i18n"

const CarsListItem = ({
  images,
  make,
  model,
  year,
  pricePerMonth,
  chassisNumber
}) => (
  <Layout>
    <Image src={images[0]} alt={make + " " + model} />
    <Box variant="subtleLeft">
      <Layout rowGap="tiny">
        <div>
          <CarInfo>
            <Heading level={4}>{make + " " + model}</Heading>
            <div>
              <CarPrice>
                kr {pricePerMonth}
                /mnd
              </CarPrice>
            </div>
          </CarInfo>
          <CarInfo>
            <span>
              <TranslatedText i18nKey="billiste-arsmodell" />: {year}
            </span>
          </CarInfo>
        </div>
        <div>
          <ReadMore to={`/app/car/${chassisNumber}`}>
            <TranslatedText i18nKey="billiste-les-mer" />
          </ReadMore>
        </div>
      </Layout>
    </Box>
  </Layout>
)

const Image = styled.img`
  display: block;
  margin: 0 auto;
`

const CarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

const CarPrice = styled.div`
  color: ${color.secondary};
  font-weight: bold;
`

const ReadMore = styled(Link)`
  display: inline-block;
  color: ${color.primary};
  font-weight: bold;
  font-size: ${font.h4};
  text-decoration: none;
  border-bottom: 1px solid ${color.primary};
`

export default CarsListItem
