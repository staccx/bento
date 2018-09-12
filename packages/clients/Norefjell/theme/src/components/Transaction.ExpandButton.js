import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { color, font, registerStyle, spacing } from "@staccx/theme"
import { formatCurrency } from "@staccx/formatting"
import { Caret } from "@staccx/base"

const ExpandListBtn = ({
  heading,
  date,
  amount,
  status,
  isExpanded,
  type,
  ...rest
}) => (
  <Item {...rest} isExpanded={isExpanded}>
    <Icon type={type}>
      {type === "DEPOSIT" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12.2 0a1.24 1.24 0 1 0 0 2.47 1.24 1.24 0 0 0 0-2.47zm0 3.7a1.24 1.24 0 1 0 0 2.48 1.24 1.24 0 0 0 0-2.47zm-.03 4.94c-.68 0-1.22.57-1.21 1.25v9.38l-2.84-2.84a1.24 1.24 0 1 0-1.75 1.75L12.2 24l5.82-5.82a1.24 1.24 0 1 0-1.75-1.75l-2.83 2.84V9.89a1.24 1.24 0 0 0-1.26-1.25z" />
        </svg>
      )}
      {type === "WITHDRAWAL" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12.2 24a1.24 1.24 0 1 1 0-2.47 1.24 1.24 0 0 1 0 2.47zm0-3.7a1.24 1.24 0 1 1 0-2.48 1.24 1.24 0 0 1 0 2.47zm-.03-4.94a1.24 1.24 0 0 1-1.21-1.25V4.73L8.12 7.57a1.24 1.24 0 1 1-1.75-1.75L12.2 0l5.82 5.82a1.24 1.24 0 1 1-1.75 1.75l-2.83-2.84v9.38a1.24 1.24 0 0 1-1.26 1.25z" />
        </svg>
      )}
      {type === "INVOICE" && (
        <svg width="24" height="20" viewBox="0 0 24 20">
          <path d="M0 0V20H24V19V0H0ZM2 2H22V18H2V2ZM5 5V7H14V5H5ZM16 5V7H19V5H16ZM5 9V11H14V9H5ZM16 9V11H19V9H16ZM12 13V15H19V13H12Z" />
        </svg>
      )}
    </Icon>
    <Body>
      <TransactionHeading>{heading}</TransactionHeading>
      <Date>{date}</Date>
    </Body>
    <Amount>
      {formatCurrency(amount || 0)} {status && <Status>{status}</Status>}
    </Amount>
    <ExpandIcon isExpanded={isExpanded} />
  </Item>
)

const ExpandIcon = styled(Caret)`
  margin-left: ${spacing.small};
  fill: ${color.primary};
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
`

const Item = styled.button`
  display: flex;
  width: 100%;
  text-align: left;
  border: 0;
  background-color: ${p => (p.isExpanded ? color.bg : "transparent")};;
  align-items: center;
  padding: ${spacing.small};
  transition: background-color 0.2s ease;
  cursor: pointer;



  &:focus,
  &:active,
  &:hover {
    outline: none;
    background-color: ${color.bg};

    ${ExpandIcon} {
      fill ${color.secondary};
    }
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: ${spacing.small};
  padding: ${spacing.tiny};

  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  color: white;

  > svg {
    ${p =>
      p.type === "DEPOSIT" &&
      css`
        fill: ${color.secondary};
      `}
  ${p =>
    p.type === "WITHDRAWAL" &&
    css`
      fill: ${color.negative};
    `}
  ${p =>
    p.type === "INVOICE" &&
    css`
      fill: ${color("invoice")};
    `}
    width: 100%;
  }
`

const Body = styled.div`
  flex-grow: 1;
`

const Amount = styled.div`
  text-align: right;
`

const Status = styled.div`
  font-size: ${font.tiny};
  line-height: 1.7;
`

const Date = styled.div`
  font-size: ${font.tiny};
  line-height: 1.7;
`

const TransactionHeading = styled.h4`
  font-size: ${font("transactionHeading")};
`

ExpandListBtn.propTypes = {
  heading: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.number
}

export const ExpandListButtonStyle = registerStyle(
  {
    transactionListItem: ExpandListBtn
  },
  "COMPONENT_EXPAND_LIST_ITEM_BTN"
)

export default ExpandListBtn
