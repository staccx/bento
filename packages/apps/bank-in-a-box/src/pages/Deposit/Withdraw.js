import React from "react"
import styled from "styled-components"
import {
  Wrapper,
  Button,
  Layout,
  LayoutItem,
  Input,
  AccountInput,
  Alert,
  Heading
} from "@staccx/base"
import { color, spacing, font } from "@staccx/theme"
import Back from "../../components/Back"

const Withdraw = ({ history }) => (
  <Wrapper variant="bib">
    <LayoutItem variant="fadeIn" delay="200">
      <Back history={history} path="/account/546126722" />
      <Heading level="2">Ta ut penger</Heading>
      <SubTitle>917 822,45 disponibelt</SubTitle>
    </LayoutItem>
    <Layout grid="rows">
      <LayoutItem variant="fadeIn" delay="400">
        <InputContent>
          <Input label="Beløp" placeholder="0" type="tel" id="telwithdraw" />
          <AccountInput
            label="Kontonummer"
            placeholder="XXXX XX XXXXX"
            id="accountwithdraw"
          />
        </InputContent>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600">
        <Alert type="info">
          Siste innskudd kom fra <Number>9081 15 74238</Number>. Klikk her for å
          sende penger tilbake
        </Alert>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="800">
        <Button>Overfør</Button>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

const SubTitle = styled.h1`
  font-size: ${font.h6};
  text-align: left;
  color: ${color.wcag};
  font-weight: normal;
  margin-bottom: ${spacing.medium};
`

const InputContent = styled.div`
  display: grid;
  grid-column-gap: ${spacing.small};
  grid-row-gap: ${spacing.small};
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`

const Number = styled.span`
  display: inline-block;
  color: ${color.primary};
`

export default Withdraw
