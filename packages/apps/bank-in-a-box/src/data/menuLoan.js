import React from "react"
import { ThemeComponent } from "@staccx/base"
import { forwards } from "../components/transitions/transitions"

const menuLoan = accountId => [
  {
    _id: "s45ht456gcf",
    label: "Kontoutskrift",
    icon: <ThemeComponent tagName={"IconAccountStatement"} />,
    path: `/loan/${accountId}/loan-statement`,
    direction: forwards
  },
  {
    _id: "tetr",
    label: "Faktura",
    icon: <ThemeComponent tagName={"IconInvoice"} />,
    path: `/loan/${accountId}/invoice`,
    direction: forwards
  },
  {
    _id: "321dsf345fdsfds4",
    label: "Nedbetalingsplan",
    icon: <ThemeComponent tagName={"IconDownpayment"} />,
    path: `/loan/${accountId}/downpayment`,
    direction: forwards
  },
  {
    _id: "hgffghd654h",
    label: "Endre forfallsdag",
    icon: <ThemeComponent tagName={"IconDue"} />,
    path: `/loan/${accountId}/due`,
    direction: forwards
  },
  {
    _id: "hgfdd12dhfg",
    label: "Betalingsforsikring",
    icon: <ThemeComponent tagName={"IconInsurance"} />,
    path: `/loan/${accountId}/insurance`,
    direction: forwards
  }
]

export default menuLoan
