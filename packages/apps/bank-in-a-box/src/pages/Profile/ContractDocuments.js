import React from "react"
import styled from "styled-components"
import {
  Box,
  Button,
  Heading,
  Layout,
  LayoutItem,
  List,
  ThemeComponent,
  theming
} from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import Back from "../../components/Back"

const ContractDocuments = ({ documents, onClick }) => (
  <Layout variant="contractDocuments">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Back path="/profile/" />
      <Heading level="2">
        <TranslatedText i18nKey={"avtaledokumenter"}>
          Avtaledokumenter
        </TranslatedText>
      </Heading>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <Box variant="contractBox">
        <List>
          {documents.map(doc => (
            <ListItem key={doc.title}>
              <Button variant="contractList" onClick={onClick}>
                <ThemeComponent tagName="IconPdf" />
                <span>{doc.title}</span>
              </Button>
            </ListItem>
          ))}
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
