import React from "react";
import { useExchangeRates } from "./useExchangeRates";
import { formatMoney } from "../../formatting";

export default {
  title: "Hooks/useExchangeRates",
  component: useExchangeRates
};

export const Vanilla = args => {
  const { convert } = useExchangeRates(args.currency);

  return (
    <div>
      <div>From: {args.currency}</div>
      <div>To: {args.to}</div>
      <div>Amount: {args.amount}</div>
      <div>Result: {formatMoney(convert(args.to, args.amount), { symbol: "symbol"})}</div>
    </div>
  );
};
Vanilla.args = {
  currency: "NOK",
  to: "USD",
  amount: 100
};
