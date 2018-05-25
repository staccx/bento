import React from "react"
import { Button } from "@staccx/base"
import { color, spacing } from "@staccx/theme"
import styled from "styled-components"

// const SIGN_ORDER_STATUS_PENDING = "pending"

const SignDocument = ({
  order,
  showButton,
  user,
  signText,
  renderDocumentText,
  signOrderStatusCompleted,
  waitingForSignatureText
}) => (
  <DocumentStatusItem key={order.requestId}>
    <div>{renderDocumentText(order.documentType)}</div>
    <div>
      {showButton && <SignButton href={order.url}>{signText}</SignButton>}
      {user.nationalId !== order.signee &&
        order.status !== signOrderStatusCompleted &&
        waitingForSignatureText}
      {order.status === signOrderStatusCompleted && (
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

export default SignDocument
