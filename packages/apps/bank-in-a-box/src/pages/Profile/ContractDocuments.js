import React from "react"
import styled from "styled-components"
import { Layout, Wrapper, Heading, Box, List, Flag, Button } from "@staccx/base"
import { ThemeComponent, color, spacing } from "@staccx/theme"
import Back from "../../components/Back"

const ContractDocuments = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      <div>
        <Back history={history} path="/profile/" />
        <PaddedHeading level="2">Avtaledokumenter</PaddedHeading>
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
      </div>
    </Layout>
  </Wrapper>
)

const ListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid ${color.line};
  }
`

const PaddedHeading = styled(Heading)`
  margin-bottom: ${spacing.small};
`

export default ContractDocuments
