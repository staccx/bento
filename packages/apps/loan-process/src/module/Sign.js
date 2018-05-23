import React from "react"
import {
  Wrapper,
  Button,
  ExpandListItem,
  Heading,
  Paragraph,
  Box,
  List
} from "@staccx/base"
import { spacing, color } from "@staccx/theme"
import {
  OfferTable,
  OfferTableData,
  OfferTableText,
  OfferTableTotal
} from "./replace/Styles.OfferTable"
import styled from "styled-components"
import { formatCurrency } from "@staccx/formatting"
import {
  SIGN_ORDER_STATUS_SIGNED,
  TASK_TYPE_SIGN_DOCUMENT
} from "../../classes/task"
import withApp from "../../hoc/withApp"
import Loading from "../../components/Loading"

// const SIGN_ORDER_STATUS_PENDING = "pending"

class Sign extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false
    }
  }

  render() {
    return (
      <Wrapper size="medium" breakout>
        <Box variant="illustration">
          {this.props.renderIllustration()}
          {/*<img src="/assets/signing.svg" alt="" width="175" />*/}
        </Box>
        <Heading variant="centered" level={1}>
          {this.props.headingText}
        </Heading>
        <Paragraph variant="lead">
          {this.props.leadText}
        </Paragraph>
        <Box variant="tileBox">
          <ul>
              <ExpandListItem
                title={
                  this.props.loanDetailsText +
                  ` ${formatCurrency(this.props.loanAmount)}`
                }
              >
                {/* TODO: vise om det er lån eller kreditt☝️ */}
                <OfferTable>
                  <tbody>
                    <tr>
                      <OfferTableText>
                        {this.props.loanOfferText}
                      </OfferTableText>
                      <OfferTableData>
                        {formatCurrency(this.props.loanAmount)}
                      </OfferTableData>
                    </tr>
                    <tr>
                      <OfferTableText>
                        {this.props.loanDurationText}
                      </OfferTableText>
                      <OfferTableData>
                        {this.props.repaymentPeriod}{" "}
                        {this.props.monthSuffix}
                      </OfferTableData>
                    </tr>
                    <tr>
                      <OfferTableText>
                        {this.props.monthlyFeeText}
                      </OfferTableText>
                      <OfferTableData>
                        {this.props.interestRate}%
                      </OfferTableData>
                    </tr>
                    <tr>
                      <OfferTableText>
                        {this.props.paybackText}
                      </OfferTableText>
                      <OfferTableData>
                        {formatCurrency(this.props.paybackTotal)}
                      </OfferTableData>
                    </tr>
                    <OfferTableTotal>
                      <OfferTableText>
                        {this.props.payMonthlyText}
                      </OfferTableText>
                      <OfferTableData>
                        {formatCurrency(this.props.monthlyPayment)}
                      </OfferTableData>
                    </OfferTableTotal>
                  </tbody>
                  {/* TODO: ☝️ lokalisering + tall fra API */}
                </OfferTable>
              </ExpandListItem>
            )}
            {
              signers.map((signer, index) => {
                const orders = signOrders.filter(
                  order => order.signee === signer.nationalId
                )

                const signedDocuments = orders.reduce(
                  (acc, current) =>
                    acc + (current.status === SIGN_ORDER_STATUS_SIGNED) ? 1 : 0,
                  0
                )
                return (
                  <ExpandListItem
                    key={signer.id}
                    title={
                      <Box variant="split">
                        <span>{`${signer.name || "Geir Nilsen"} (${
                          signer.email
                        })`}</span>{" "}
                        {/* TODO: ☝️ fjerne denne fallbacken */}
                        <span>{`${signedDocuments}/${orders.length}`}</span>
                        {/* TODO: ☝️ hente fra api */}
                      </Box>
                    }
                    expanded={index === 0}
                    flush
                  >
                    <List variant="documentStatusList">
                      {orders.map(order => {
                        const showButton =
                          order.status !== SIGN_ORDER_STATUS_SIGNED ||
                          user.profile.sub !== order.signee
                        return (
                          <DocumentStatusItem key={order.requestId}>
                            <div>
                              <SystemText systemKey={order.documentType} />
                            </div>
                            <div>
                              {showButton && (
                                <SignButton href={order.url}>
                                  <SystemText systemKey="SIGN" />
                                </SignButton>
                              )}
                              {user.profile.sub !== order.signee &&
                                order.status !== SIGN_ORDER_STATUS_SIGNED && (
                                  <SystemText systemKey="SIGNATURE_WAITING" />
                                )}
                              {order.status === SIGN_ORDER_STATUS_SIGNED && (
                                <Checkmark viewBox="0 0 28 28">
                                  <path
                                    fill="#19AC20"
                                    d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28zm-2-11l9-10 2 2-11 12-6-6 2-2 4 4z"
                                  />
                                </Checkmark>
                              )}
                            </div>
                          </DocumentStatusItem>
                        )
                      })}
                    </List>
                  </ExpandListItem>
                )
              })}
          </ul>
        </Box>
      </Wrapper>
    )
  }
}

const SignButton = styled(Button.withComponent("a"))`
  margin-bottom: 0;
  &:disabled {
    background: gray;
  }
`

const Checkmark = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
`

const DocumentStatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: ${spacing.small} ${spacing.medium};
  border-top: 1px solid ${color.line};
`

export default Sign
