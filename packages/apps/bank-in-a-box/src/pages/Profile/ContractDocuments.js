import React from "react"
import styled from "styled-components"
import {
  Layout,
  Heading,
  Box,
  List,
  Button,
  LayoutItem,
  ThemeComponent,
  theming
} from "@staccx/base"
import Back from "../../components/Back"

const ContractDocuments = ({ history, accounts }) => (
  <Layout variant="contractDocuments">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Back history={history} path="/profile/" />
      <Heading level="2">Avtaledokumenter</Heading>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <Box variant="contractBox">
        <List>
          <ListItem>
            <Button variant="contractList">
              <ThemeComponent tagName="IconPdf" />
              <span>Høyrentekonto</span>
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="contractList">
              <ThemeComponent tagName="IconPdf" />
              <span>Forbrukslån</span>
            </Button>
          </ListItem>
        </List>
      </Box>
    </LayoutItem>
  </Layout>
)

const ListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid ${theming.color.line};
  }
`

export default ContractDocuments
