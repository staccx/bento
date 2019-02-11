import React from "react"
import styled from "styled-components"
import {
  Anchor,
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

const ContractDocuments = ({ documents }) => (
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
            <ListItem key={doc.downloadUrl}>
              <Button
                target={"_blank"}
                href={doc.downloadUrl}
                as={Anchor}
                variant="contractList"
              >
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
