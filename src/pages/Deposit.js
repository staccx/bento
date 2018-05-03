import React from "react"
import styled from "styled-components"
import {
  Modal,
  Box,
  Button,
  List,
  SplitListItem,
  Layout,
  LayoutItem
} from "@staccx/base"
import { color } from "@staccx/theme"

const Deposit = () => (
  <FlushModal isOpen>
    <PageContent>
      <Box variant="modalLeft">
        <Layout grid="rows">
          <LayoutItem>
            <h2>eFaktura</h2>
          </LayoutItem>
          <LayoutItem>
            <p>
              Ved å klikke på knappen under får du tilsendt en eFaktura på 0,-
              fra NorFjell bank. Juster beløpet til det du ønsker å sette inn på
              høyrente-kontoen og betal eFakturaen.
            </p>
          </LayoutItem>
          <LayoutItem>
            <Button variant="modalLeftButton">Send eFaktura</Button>
          </LayoutItem>
        </Layout>
      </Box>
      <Box variant="modalRight">
        <Layout grid="rows">
          <LayoutItem>
            <h2>Betaling</h2>
          </LayoutItem>
          <LayoutItem>
            <p>Send en vanlig betaling til</p>
          </LayoutItem>
          <LayoutItem>
            <List>
              <ListItem>
                <div>Kontonummer:</div>
                <div>
                  1805.30.17334 <CopyBtn>kopier</CopyBtn>
                </div>
              </ListItem>
              <ListItem>
                <div>KID:</div>
                <div>
                  6000 00 154 <CopyBtn>kopier</CopyBtn>
                </div>
              </ListItem>
            </List>
          </LayoutItem>
        </Layout>
      </Box>
    </PageContent>
  </FlushModal>
)

const PageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

const FlushModal = styled(Modal)`
  > * {
    padding: 0;
  }
`

const ListItem = styled(SplitListItem)`
  padding-left: 0;
  padding-right: 0;
`

const CopyBtn = styled.button`
  padding: 0;
  background-color: transparent;
  color: ${color.primary};
  border: 0;
  text-decoration: underline;
`

export default Deposit
