import React from "react"
import {
  Layout,
  Wrapper,
  LayoutItem,
  Heading,
  Box,
  List,
  SplitListItem
} from "@staccx/base"
import { color, spacing, font } from "@staccx/theme"
import styled from "styled-components"
import Back from "../components/Back"

const Prices = ({ history }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Back history={history} path="/" />
        <Heading level="2">Priser</Heading>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400">
        <SubHeading level="3">Høyrente</SubHeading>
        <Box variant="prices">
          <List>
            <SplitListItem>
              <div>
                Effektiv rente <br /> beløp mellom 50 000,- og 2 mill
              </div>
              <div>1,90%</div>
            </SplitListItem>
            <SplitListItem>
              <div>
                Effektiv rente <br />
                beløp under 50 000
              </div>
              <div>1,00%</div>
            </SplitListItem>
            <SplitListItem>
              <div>
                Nominell rente <br />
                beløp mellom 50 000,- og 2 mill
              </div>
              <div>1,88365%</div>
            </SplitListItem>
            <SplitListItem>
              <div>
                Nominell rente <br />
                beløp under 50 000
              </div>
              <div>0,99%</div>
            </SplitListItem>
            <SplitListItem>
              <div>Uttak</div>
              <div>0 kr</div>
            </SplitListItem>
          </List>
        </Box>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

const SubHeading = styled.h3`
  color: ${color.primary};
  font-size: ${font.h3};
  margin-bottom: ${spacing.small};
`

export default Prices
