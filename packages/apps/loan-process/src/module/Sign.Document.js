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
  signedText,
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
        <SignedContainer>
          <Checkmark viewBox="0 0 28 28">
            <path
              fill="#19AC20"
              d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28zm-2-11l9-10 2 2-11 12-6-6 2-2 4 4z"
            />
          </Checkmark>
          <span>{signedText}</span>
        </SignedContainer>
      )}
    </div>
  </DocumentStatusItem>
)

const SignedContainer = styled.div`
  display: flex;
`

const SignButton = styled(Button.withComponent("a"))`
  margin-bottom: 0;
  &:disabled {
    background: gray;
  }
`

const Checkmark = styled.svg`
  display: block;
  width: ${spacing.medium};
  height: ${spacing.medium};
  margin-right: ${spacing.small};
`

const DocumentStatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    border-top: 1px solid ${color.line};
  }
`

export default SignDocument
