import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { formatPhone, formatCurrency } from "@staccx/formatting"
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

export class Withdraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toNumber: null
    }
    this.addAccountNumber = this.addAccountNumber.bind(this)
  }

  addAccountNumber() {
    console.log("addAccountNumber")
    this.setState({
      toNumber: this.props.accountNumber
    })
  }

  render() {
    const { history, accountNumber, saldo } = this.props
    const { toNumber } = this.state
    return (
      <Wrapper variant="bib">
        <LayoutItem variant="fadeIn" delay="200">
          <Back history={history} path="/account/546126722" />
          <Heading level="2">Ta ut penger</Heading>
          <SubTitle>
            {formatCurrency(saldo, { precision: 2, decimal: "," })} disponibelt
          </SubTitle>
        </LayoutItem>
        <Layout grid="rows">
          <LayoutItem variant="fadeIn" delay="400">
            <InputContent>
              <Input
                label="Beløp"
                placeholder="0"
                type="tel"
                id="telwithdraw"
              />
              <AccountInput
                label="Kontonummer"
                placeholder="XXXX XX XXXXX"
                id="accountwithdraw"
                value={toNumber}
              />
            </InputContent>
          </LayoutItem>
          <LayoutItem variant="fadeIn" delay="600">
            <Alert
              type="info"
              onClick={() => this.addAccountNumber()}
              role="button"
              tabindex="4"
              aria-pressed="false"
            >
              Siste innskudd kom fra{" "}
              <Number>{formatPhone(accountNumber, "XXXX XX XXXXX")}</Number>.
              Klikk her for å sende penger tilbake
            </Alert>
          </LayoutItem>
          <LayoutItem variant="fadeIn" delay="800">
            <Button>Overfør</Button>
          </LayoutItem>
        </Layout>
      </Wrapper>
    )
  }
}

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

Withdraw.propTypes = {
  accountNumber: PropTypes.number,
  toNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  saldo: PropTypes.number
}

Withdraw.defaultProps = {
  accountNumber: 98011574238,
  toNumber: null,
  saldo: 0
}

export default Withdraw
