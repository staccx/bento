import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import ShowMore from "@tedconf/react-show-more"
import { Button, Box } from "@staccx/base"
import InvoiceListItem from "./InvoiceList/InvoiceList.item"
import InvoiceListExpanded from "./InvoiceList/InvoiceList.expanded"
import invoices from "../../data/invoices"

class Transactions extends Component {
  static propTypes = {
    account: PropTypes.object
  }

  render() {
    return (
      <Container variant="dashboardBox">
        <ShowMore items={invoices} by={5}>
          {({ current, onMore }) => (
            <React.Fragment>
              <List>
                {current.map(invoice => (
                  <InvoiceListItem
                    title="noe greier"
                    heading={invoice.heading}
                    date={invoice.friendlyDate}
                    amount={invoice.amount}
                    key={invoice._id}
                    status={invoice.status}
                    type={invoice.type}
                  >
                    <InvoiceListExpanded
                      amount={invoice.amount}
                      dueDate={invoice.dueDate}
                      payTo={invoice.payTo}
                      paid={invoice.paid}
                      rest={invoice.rest}
                      kid={invoice.kid}
                      url={invoice.url}
                    />
                  </InvoiceListItem>
                ))}
              </List>
              {onMore && (
                <Button
                  variant="expand"
                  onClick={() => {
                    if (onMore) onMore()
                  }}
                >
                  Flere transaksjoner
                </Button>
              )}
            </React.Fragment>
          )}
        </ShowMore>
      </Container>
    )
  }
}

const Container = styled(Box)`
  padding: 0;
`

const List = styled.ol`
  list-style-type: none;
  margin: 0;
`

export default Transactions
