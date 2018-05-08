import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color, font } from "@staccx/theme"
import { formatCurrency } from "@staccx/formatting"
import { Caret } from "@staccx/base"

const ExpandListBtn = ({ heading, date, amount, isExpanded, ...rest }) => (
  <Item {...rest}>
    <Icon type={amount > 0 ? "deposit" : "withdrawal"}>
      {amount > 0 ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12.2 0a1.24 1.24 0 1 0 0 2.47 1.24 1.24 0 0 0 0-2.47zm0 3.7a1.24 1.24 0 1 0 0 2.48 1.24 1.24 0 0 0 0-2.47zm-.03 4.94c-.68 0-1.22.57-1.21 1.25v9.38l-2.84-2.84a1.24 1.24 0 1 0-1.75 1.75L12.2 24l5.82-5.82a1.24 1.24 0 1 0-1.75-1.75l-2.83 2.84V9.89a1.24 1.24 0 0 0-1.26-1.25z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12.2 24a1.24 1.24 0 1 1 0-2.47 1.24 1.24 0 0 1 0 2.47zm0-3.7a1.24 1.24 0 1 1 0-2.48 1.24 1.24 0 0 1 0 2.47zm-.03-4.94a1.24 1.24 0 0 1-1.21-1.25V4.73L8.12 7.57a1.24 1.24 0 1 1-1.75-1.75L12.2 0l5.82 5.82a1.24 1.24 0 1 1-1.75 1.75l-2.83-2.84v9.38a1.24 1.24 0 0 1-1.26 1.25z" />
        </svg>
      )}
    </Icon>
    <Body>
      <TransactionHeading>{heading}</TransactionHeading>
      <div>{date}</div>
    </Body>
    <Amount>{formatCurrency(amount || 0)}</Amount>
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
  background-color: transparent;
  align-items: center;
  padding: ${spacing.small};
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    outline: none;
    background-color: rgba(0, 0, 0, 0.03);

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
  background-color: ${props =>
    props.type === "withdrawal" ? color.negative : color.positive};
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  color: white;

  > svg {
    fill: ${color.white};
    width: 100%;
  }
`

const Body = styled.div`
  flex-grow: 1;
`

const Amount = styled.div``

const TransactionHeading = styled.h4`
  font-size: ${font("transactionHeading")};
`

ExpandListBtn.propTypes = {
  heading: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.number
}

export default ExpandListBtn
