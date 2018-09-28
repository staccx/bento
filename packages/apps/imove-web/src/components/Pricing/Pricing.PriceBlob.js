import React from "react"
import styled from "styled-components"
import { color, font } from "@staccx/theme"
import {} from "@staccx/base"

const PriceBlob = ({ price }) => (
  <Content>
    <Inner>
      fra
      <Price>kr {price}</Price>
      /mnd
    </Inner>
  </Content>
)

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color("primary")};
  border-radius: 100%;
  border-bottom-right-radius: 0;
  width: 140px;
  height: 140px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  color: ${color("white")};
  font-weight: normal;
  font-size: ${font("large")};
  margin: 60px auto 0;
`

const Inner = styled.div``

const Price = styled.div`
  font-family: "Sofia Pro";
  font-weight: bold;
  line-height: 1;
  margin-top: 0.4em;
`

export default PriceBlob
