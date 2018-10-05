import React from "react"
import styled from "styled-components"
import {
  Layout,
  Wrapper,
  Heading,
  Box,
  List,
  Flag,
  Button,
  LayoutItem,
  ThemeComponent,
  theming
} from "@staccx/base"
import Back from "../../components/Back"

const ContractDocuments = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Back history={history} path="/profile/" />
        <Heading level="2">Avtaledokumenter</Heading>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400">
        <Box variant="contractBox">
          <List>
            <ListItem>
              <Button variant="contractList">
                <Flag tiny img={<ThemeComponent tagName="IconPdf" />}>
                  Høyrentekonto
                </Flag>
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="contractList">
                <Flag tiny img={<ThemeComponent tagName="IconPdf" />}>
                  Forbrukslån
                </Flag>
              </Button>
            </ListItem>
          </List>
        </Box>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

const ListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid ${theming.color.line};
  }
`

export default ContractDocuments
