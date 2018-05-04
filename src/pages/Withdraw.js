import React from "react"
import styled from "styled-components"
import {
  Modal,
  Button,
  Layout,
  LayoutItem,
  Input,
  AccountInput,
  Alert
} from "@staccx/base"
import { color, spacing } from "@staccx/theme"

const Deposit = () => (
  <Modal isOpen>
    <Layout grid="rows">
      <LayoutItem>
        <h1>Ta ut penger</h1>
        <span>917 822,45 disponibelt</span>
      </LayoutItem>
      <LayoutItem>
        <InputContent>
          <Input label="Beløp" placeholder="0" type="tel" id="telwithdraw" />
          <AccountInput
            label="Kontonummer"
            placeholder="XXXX XX XXXXX"
            id="accountwithdraw"
          />
        </InputContent>
      </LayoutItem>
      <LayoutItem>
        <Alert type="info">
          Siste innskudd kom fra <Code>9081 15 74238</Code>. Klikk her for å
          sende penger tilbake
        </Alert>
      </LayoutItem>
      <LayoutItem>
        <Button>Overfør</Button>
      </LayoutItem>
    </Layout>
  </Modal>
)

const InputContent = styled.div`
  display: grid;
  grid-column-gap: ${spacing.small};
  grid-row-gap: ${spacing.small};
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`

const Code = styled.code`
  display: inline-block;
  color: ${color.primary};
`

export default Deposit
