import React from "react"
import styled from "styled-components"
import { Modal, Box, Button, List, SplitListItem } from "@staccx/base"

const Deposit = () => (
  <FlushModal isOpen>
    <PageContent>
      <Box variant="modalLeft">
        <h2>eFaktura</h2>
        <p>
          Ved å klikke på knappen under får du tilsendt en eFaktura på 0,- fra
          NorFjell bank. Juster beløpet til det du ønsker å sette inn på
          høyrente-kontoen og betal eFakturaen.
        </p>
        <Button variant="modalLeftButton">Send eFaktura</Button>
      </Box>
      <Box variant="modalRight">
        <h2>Betaling</h2>
        <p>Send en vanlig betaling til</p>

        <List>
          <SplitListItem>
            <div>Kontonummer:</div>
            <div>
              1805.30.17334 <button>kopier</button>
            </div>
          </SplitListItem>
          <SplitListItem>
            <div>KID:</div>
            <div>
              6000 00 154 <button>kopier</button>
            </div>
          </SplitListItem>
        </List>
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

export default Deposit
