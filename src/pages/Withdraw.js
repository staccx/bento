import React from "react"
import styled from "styled-components"
import {
  Modal,
  Box,
  Button,
  List,
  SplitListItem,
  Layout,
  LayoutItem,
  Input,
  AccountInput
} from "@staccx/base"
import { color, spacing } from "@staccx/theme"

const Deposit = () => (
  <Modal isOpen>
    <header>
      <h1>Ta ut penger</h1>
      <span>917 822,45 disponibelt</span>
    </header>
    <div>
      <Input label="Beløp" placeholder="0" type="tel" />
      <AccountInput label="Kontonummer" placeholder="XXXX XX XXXXX" />
      <Alert>
        Siste innskudd kom fra <code>9081 15 74238</code>. Klikk her for å sende
        penger tilbake
      </Alert>
      <Button>Overfør</Button>
    </div>
  </Modal>
)

const Alert = styled.div`
  width: 100%;
  background: #f0f0f0;
  border-radius: 3px;
  padding: ${spacing.small};
`

export default Deposit
