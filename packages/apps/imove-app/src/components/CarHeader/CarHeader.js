import React from "react"
import styled from "styled-components"
import { Layout, Heading } from "@staccx/base"
import { color, font } from "@staccx/theme"

const CarHeader = ({ make, model, price, status }) => {
  return (
    <header>
      <Layout rowGap="tiny">
        <Heading level={2}>{make + " " + model}</Heading>
        <div>
          <CarPrice>
            {price}
            ,- per mnd.
          </CarPrice>
        </div>
        {status && (
          <div>
            <Status available>Status: Tilgjengelig nå</Status>
            {/* TODO: get from api */}
          </div>
        )}
      </Layout>
    </header>
  )
}

const CarPrice = styled.div`
  color: ${color.secondary};
  font-size: ${font.h3};
`

const Status = styled.span`
  color: ${p => (p.available ? color("primary")(p) : color("text")(p))};
  font-weight: bold;
`

export default CarHeader
