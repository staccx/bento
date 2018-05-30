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
import { color, spacing, font, fontWeight } from "@staccx/theme"

const Deposit = () => (
  <Modal variant="small" isOpen>
    <Layout grid="rows">
      <LayoutItem>
        <Heading>Ta ut penger</Heading>
        <SubTitle>917 822,45 disponibelt</SubTitle>
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
          Siste innskudd kom fra <Number>9081 15 74238</Number>. Klikk her for å
          sende penger tilbake
        </Alert>
      </LayoutItem>
      <LayoutItem>
        <Button>Overfør</Button>
      </LayoutItem>
    </Layout>
  </Modal>
)

const Heading = styled.h1`
  font-size: ${font.h4};
  text-align: center;
  font-weight: ${fontWeight.bold};
  color: ${color.text};
  margin-bottom: ${spacing.tiny};
`
const SubTitle = styled.h1`
  font-size: ${font.h6};
  text-align: center;
  color: ${color.wcag};
  font-weight: normal;
`

const InputContent = styled.div`
  display: grid;
  grid-column-gap: ${spacing.small};
  grid-row-gap: ${spacing.small};
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`

const Number = styled.span`
  display: inline-block;
  color: ${color.secondary};
`

export default Deposit
