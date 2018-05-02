import React from "react"
import styled from "styled-components"
import { Modal, Box, Button } from "@staccx/base"

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
      <Box variant="modalRight">Yo!</Box>
    </PageContent>
  </FlushModal>
)

const PageContent = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const FlushModal = styled(Modal)`
  > * {
    padding: 0;
  }
`

export default Deposit
