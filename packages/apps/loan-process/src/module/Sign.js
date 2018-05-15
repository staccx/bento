import React from "react"
import { Wrapper, Button, ExpandListItem } from "@staccx/base"
import SystemText from "../../components/SystemText"
import {
  DocumentStatusContent,
  DocumentStatusItem,
  DocumentStatusList,
  Heading,
  Illustration,
  Lead,
  Split,
  TileBox
} from "../../Styles"
import {
  OfferTable,
  OfferTableData,
  OfferTableText,
  OfferTableTotal
} from "../../Styles.OfferTable"
import styled from "styled-components"
import withTasks from "../../hoc/withTasks"
import withLoanApplication from "../../hoc/withLoanApplication"
import { format as formatCurrency } from "../../utils/formatCurrency"
import { toSystemText } from "../../utils/toSystemText"
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

  componentWillMount() {
    this.timeout = setTimeout(() => {
      this.props.resumeFromSession(this.props.flowId, 0, true)
      this.setState({ ready: true })
    }, 1500)
  }

  render() {
    if (!this.state.ready) {
      return <Loading message={"SIGNING_IMMINENT"} />
    }

    const { loanApplication, payment, taskReducer, user } = this.props
    const { application } = loanApplication
    const { data } = application

    const signers = data ? data.signers : []

    const signOrders = data ? data.signOrders : []

    const task = taskReducer[TASK_TYPE_SIGN_DOCUMENT]

    if (!task || !user) {
      return null
    }

    return (
      <Wrapper size="medium" breakout>
        <Illustration>
          <img src="/assets/signing.svg" alt="" width="175" />
        </Illustration>
        <Heading>
          <SystemText systemKey="SIGNING_PAGE_HEADING" />
        </Heading>
        <Lead>
          {data &&
            data.loanType && (
              <SystemText systemKey={`SIGNING_LEAD_${data.loanType}`} />
            )}
        </Lead>
        <TileBox>
          <ul>
            {data && (
              <ExpandListItem
                title={
                  toSystemText("SEE_LOAN_DETAILS", "Se detaljer for lånet på") +
                  ` ${formatCurrency(data.loanAmount)}`
                }
              >
                {/* TODO: vise om det er lån eller kreditt☝️ */}
                <OfferTable>
                  <tbody>
                    <tr>
                      <OfferTableText>
                        <SystemText systemKey="LOAN_OFFER" />
                      </OfferTableText>
                      <OfferTableData>
                        {formatCurrency(data.loanAmount)}
                      </OfferTableData>
                    </tr>
                    <tr>
                      <OfferTableText>
                        <SystemText systemKey="LOAN_DURATION" />
                      </OfferTableText>
                      <OfferTableData>
                        {data.repaymentPeriod}{" "}
                        <SystemText systemKey="MONTHS_SHORT" />
                      </OfferTableData>
                    </tr>
                    <tr>
                      <OfferTableText>
                        <SystemText systemKey="MONTHLY_FEE" />
                      </OfferTableText>
                      <OfferTableData>
                        {payment.term && payment.term.interestRate}%
                      </OfferTableData>
                    </tr>
                    <tr>
                      <OfferTableText>
                        <SystemText systemKey="TOTAL_PAYBACK" />
                      </OfferTableText>
                      <OfferTableData>
                        {payment.term &&
                          formatCurrency(payment.term.monthlyPayment * 6)}
                      </OfferTableData>
                    </tr>
                    <OfferTableTotal>
                      <OfferTableText>
                        <SystemText systemKey="PAY_MONTHLY" />
                      </OfferTableText>
                      <OfferTableData>
                        {payment.term &&
                          formatCurrency(payment.term.monthlyPayment)}
                      </OfferTableData>
                    </OfferTableTotal>
                  </tbody>
                  {/* TODO: ☝️ lokalisering + tall fra API */}
                </OfferTable>
              </ExpandListItem>
            )}
            {signOrders &&
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
                      <Split>
                        <span>{`${signer.name || "Geir Nilsen"} (${
                          signer.email
                        })`}</span>{" "}
                        {/* TODO: ☝️ fjerne denne fallbacken */}
                        <span>{`${signedDocuments}/${orders.length}`}</span>
                        {/* TODO: ☝️ hente fra api */}
                      </Split>
                    }
                    expanded={index === 0}
                    flush
                  >
                    <DocumentStatusList>
                      {orders.map(order => {
                        const showButton =
                          order.status !== SIGN_ORDER_STATUS_SIGNED ||
                          user.profile.sub !== order.signee
                        return (
                          <DocumentStatusItem key={order.requestId}>
                            <DocumentStatusContent>
                              <SystemText systemKey={order.documentType} />
                            </DocumentStatusContent>
                            <DocumentStatusContent>
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
                            </DocumentStatusContent>
                          </DocumentStatusItem>
                        )
                      })}
                    </DocumentStatusList>
                  </ExpandListItem>
                )
              })}
          </ul>
        </TileBox>
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

export default withApp(withLoanApplication(withTasks(Sign)))
