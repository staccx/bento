import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"
import { List, SplitListItem, Button, Flag } from "@staccx/base"

const InvoiceListItemExpanded = ({
  amount,
  dueDate,
  payTo,
  kid,
  paid,
  rest
}) => (
  <Outer>
    <ButtonWrapper>
      <Button variant="invoiceDownload">
        <Flag
          tiny
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
            >
              <path d="M7 3a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10.5a1 1 0 0 0-.293-.707l-6.5-6.5A1 1 0 0 0 17.5 3H7zm10 1.904L23.096 11H18a1 1 0 0 1-1-1V4.904zm-2.922 7.397c.543 0 .998.23 1.281.646.228.334.338.764.338 1.315 0 .945-.423 2.428-1.082 4.017.318.721.69 1.435 1.084 2.084.918.006 2.18.09 3.21.436 1.48.496 1.792 1.312 1.792 1.91 0 .861-.7 1.791-2.234 1.791-1.135 0-2.4-1.152-3.492-2.729a16.89 16.89 0 0 0-2.246.221c-1.272 2.081-2.714 3.71-3.813 3.71-1.208 0-1.615-1.194-1.615-1.74 0-1.712 2.166-2.725 4.56-3.22a27.41 27.41 0 0 0 1.268-2.431c-.557-1.381-.9-2.732-.9-3.735 0-.636.13-1.151.388-1.535.322-.478.842-.74 1.461-.74zm-.002 1.398c-.217 0-.266.074-.299.123-.056.083-.15.292-.15.754 0 .512.102 1.111.28 1.752.261-.818.41-1.562.39-2.152-.016-.476-.13-.477-.22-.477zm2.63 8.106c.642.788 1.27 1.295 1.759 1.295.576 0 .834-.197.834-.393 0-.184-.327-.413-.836-.584-.462-.155-1.066-.262-1.758-.318zm-5.958.67c-1.265.427-2.049.982-2.049 1.486.001 0 .057.34.215.34.38-.027 1.072-.752 1.834-1.826z" />
            </svg>
          }
        >
          Se faktura
        </Flag>
      </Button>
    </ButtonWrapper>
    <List>
      <SplitListItem>
        <div>Til forfall</div>
        <div>{amount}</div>
      </SplitListItem>
      <SplitListItem>
        <div>Forfallsdato</div>
        <div>{dueDate}</div>
      </SplitListItem>
      <SplitListItem>
        <div>Kontonummer for innbetaling</div>
        <div>{payTo}</div>
      </SplitListItem>
      <SplitListItem>
        <div>KID for innbetaling</div>
        <div>{kid}</div>
      </SplitListItem>
      <SplitListItem>
        <div>Betalt</div>
        <div>{paid}</div>
      </SplitListItem>
      <SplitListItem>
        <div>Gjenstående</div>
        <div>{rest}</div>
      </SplitListItem>
    </List>
  </Outer>
)

const Outer = styled.div`
  background-color: ${color("expandedItem")};
`

const ButtonWrapper = styled.div`
  display: flex;
  margin: ${spacing.medium} 0;
  justify-content: center;
`

InvoiceListItemExpanded.propTypes = {
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default InvoiceListItemExpanded
