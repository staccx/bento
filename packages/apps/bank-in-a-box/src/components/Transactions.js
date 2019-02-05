import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ShowMore from "@tedconf/react-show-more"
import { Button, Box } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import TransactionListItem from "./TransactionList/TransactionList.item"
import TransactionListExpanded from "./TransactionList/TransactionList.expanded"
import { formatCurrency } from "@staccx/formatting"

const Transactions = ({
  transactions,
  accountType = "SAVINGS",
  availableBalance,
  header
}) => (
  <div>
    {header && (
      <Box variant={"transactionHeader"}>
        <div>{accountType === "LOAN" ? "Lån" : "På konto"}</div>
        <div>
          {formatCurrency(availableBalance, {
            precision: 2
          })}
        </div>
      </Box>
    )}
    <Box variant="dashboardBox">
      <ShowMore items={transactions} by={5}>
        {({ current, onMore }) => (
          <React.Fragment>
            <List>
              {current.map(transaction => (
                <TransactionListItem
                  title={transaction._id}
                  heading={transaction.heading}
                  date={transaction.friendlyDate}
                  amount={transaction.amount}
                  key={transaction._id}
                  type={transaction.type}
                >
                  <TransactionListExpanded
                    date={transaction.date}
                    amount={transaction.amount}
                    message={transaction.message}
                    toAccount={transaction.toAccount}
                    fromAccount={transaction.fromAccount}
                    rent={transaction.rent}
                    installments={transaction.installments}
                    fee={transaction.fee}
                    type={transaction.type}
                  />
                </TransactionListItem>
              ))}
            </List>
            {onMore && (
              <Button
                variant="expand"
                onClick={() => {
                  if (onMore) onMore()
                }}
              >
                <TranslatedText i18nKey="flere-transaksjoner">
                  Flere transaksjoner
                </TranslatedText>
              </Button>
            )}
          </React.Fragment>
        )}
      </ShowMore>
    </Box>
  </div>
)

const List = styled.ol`
  list-style-type: none;
  margin: 0;
`

Transactions.propTypes = {
  header: PropTypes.bool,
  accountType: PropTypes.string,
  availableBalance: PropTypes.number
}

Transactions.defaultProps = {
  header: true,
  accountType: "SAVINGS",
  availableBalance: 0
}

export default Transactions
