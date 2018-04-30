import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { font, color, spacing } from "@staccx/theme";

const Account = ({ title, balance, earned }) => (
  <AccountCard>
    <Title>{title}</Title>
    <Balance>{balance}</Balance>
    <Earned>{earned}</Earned>
  </AccountCard>
);

const AccountCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.002),
    0px 8px 8px rgba(0, 0, 75, 0.001), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.0101);
  border-radius: 3px;
  padding: ${spacing.medium};
`;

const Title = styled.h3`
  font-size: ${font.input};
  font-weight: bold;
  color: ${color.wcag};
`;

const Balance = styled.div`
  font-size: ${font.h1};
  font-weight: bold;
  color: ${color.primary};
`;

const Earned = styled.div`
  font-size: ${font.input};
  font-weight: bold;
  color: ${color.green};
`;

Account.defaultProps = {
  title: "På konto"
};

Account.propTypes = {
  title: PropTypes.string,
  balance: PropTypes.number.isRequired,
  earned: PropTypes.number.isRequired
};

export default Account;
