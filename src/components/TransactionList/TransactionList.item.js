import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color, font } from "@staccx/theme"
import { formatCurrency } from "@staccx/formatting"

const TransactionListItem = ({ heading, date, amount }) => (
  <Item>
    <Icon type={amount > 0 ? "deposit" : "withdrawal"}>
      {amount > 0 ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 45">
          <path
            fill="#fff"
            d="M16.5.56a7.51 7.51 0 0 0-6.75 10.75l1.78-.87a5.48 5.48 0 0 1 4.97-7.88c3.05 0 5.5 2.45 5.5 5.5h2c0-4.13-3.37-7.5-7.5-7.5zm18.69 4.38c-.05 0-.09.02-.13.03a11.04 11.04 0 0 0-7.34 5.63 25.84 25.84 0 0 0-5.47-.66c-5.69 0-10.1 1.77-13.56 4.47A12.58 12.58 0 0 0 4.66 20c-.31-.1-.72-.28-1.2-.6C2.69 18.88 2 18.15 2 16.79c0-1.08.5-1.98 1.34-2.34a1 1 0 0 0-.4-1.94c-.13 0-.26.04-.38.1A4.47 4.47 0 0 0 0 16.77c0 2.1 1.22 3.52 2.34 4.28.7.48 1.3.71 1.72.85a18.38 18.38 0 0 0-.4 4.87c.18 4.45 3.2 7.72 5.46 9.53h.04c.2.16.26.26.28.28.01.03.06-.03-.03.25-.3.93-.88 2.32-.88 2.32v.03a2.72 2.72 0 0 0 1.56 3.5v.03l3.22 1.19c1.4.53 3-.17 3.53-1.57l.75-2.06c.06-.14.1-.17.13-.22l.12.03c.64.12 2.05.53 4.41.53 2.4 0 3.8-.24 4.44-.28h.22c.01.03 0 .05.03.1v.03c.32.96.7 1.85.72 1.87 0 .02.02.02.03.03a2.7 2.7 0 0 0 3.47 1.54l3.21-1.2v-.02c1.4-.53 2.1-2.1 1.57-3.5l-.5-1.35-.1-.15h.03s-.13.05.2-.13a12.88 12.88 0 0 0 5.46-5.81c.11-.23.2-.4.28-.47.08-.07.13-.12.44-.12h1.63A2.64 2.64 0 0 0 46 28.53v-4.87a2.64 2.64 0 0 0-2.63-2.63h-1.62c-.25 0-.32-.02-.34-.03a11.13 11.13 0 0 0-6.72-8.31c.05-2.06.5-3.69 1.5-6.38a1 1 0 0 0-1-1.37zm-1.56 2.81a16.48 16.48 0 0 0-1 5.53c0 .43.28.8.68.94a8.93 8.93 0 0 1 6.13 7.22c.15.95 1.17 1.6 2.31 1.6h1.63c.35 0 .62.26.62.62v4.87c0 .35-.27.63-.63.63h-1.62c-.73 0-1.4.27-1.81.65-.42.39-.6.8-.72 1.07a10.73 10.73 0 0 1-4.6 4.9 2.35 2.35 0 0 0-1.24 1.84c-.02.52.16.8.21.91h-.03l.06.16.44 1.22c.15.37-.02.79-.4.93l-3.22 1.22a.73.73 0 0 1-.94-.44v-.03s-.4-.9-.69-1.78a2.14 2.14 0 0 0-.84-1.22c-.49-.3-.96-.27-1.4-.25-.9.06-2.05.28-4.32.28-2.14 0-3.2-.34-4.06-.5a2.11 2.11 0 0 0-1.5.16c-.55.3-.75.8-.94 1.31-.34.93-.78 2.03-.78 2.03a.73.73 0 0 1-.94.44l-3.22-1.22a.71.71 0 0 1-.4-.93c.01-.05.56-1.39.9-2.44.23-.71.14-1.43-.15-1.9-.3-.48-.68-.74-.79-.82-2.02-1.62-4.57-4.5-4.71-8.06-.21-5.07 1.52-8.6 4.25-10.72 3.15-2.46 7.06-4.03 12.34-4.03 2.02 0 3.92.24 5.72.69a1 1 0 0 0 1.16-.57 8.05 8.05 0 0 1 4.5-4.31zm.84 13.34a1.93 1.93 0 0 0 0 3.84c1.05 0 1.9-.88 1.9-1.93a1.9 1.9 0 0 0-1.9-1.9z"
          />
        </svg>
      ) : (
        "—"
      )}
    </Icon>
    <Body>
      <TransactionHeading>{heading}</TransactionHeading>
      <div>{date}</div>
    </Body>
    <Amount>{formatCurrency(amount)}</Amount>
  </Item>
)

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 ${spacing.small} ${spacing.small};
  border-bottom: 1px solid ${color.line};
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
`

const Body = styled.div`
  flex-grow: 1;
`

const Amount = styled.div``

const TransactionHeading = styled.h4`
  font-size: ${font("transactionHeading")};
`

TransactionListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default TransactionListItem
