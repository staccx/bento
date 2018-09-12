import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { forwards } from "../components/transitions/transitions"

const menuLoan = accountId => [
  {
    _id: "s45ht456gcf",
    label: "Kontoutskrift",
    icon: <ThemeComponent tagName={"IconAccountStatement"} />,
    path: `/account/${accountId}/loan-statement`,
    direction: forwards
  },
  {
    _id: "tetr",
    label: "Faktura",
    icon: <ThemeComponent tagName={"IconInvoice"} />,
    path: `/account/${accountId}/invoice`,
    direction: forwards
  },
  {
    _id: "hgffghd654h",
    label: "Endre forfallsdag",
    icon: <ThemeComponent tagName={"IconDue"} />,
    path: `/account/${accountId}/due`,
    direction: forwards
  },
  {
    _id: "hgfdd12dhfg",
    label: "Betalingsforsikring",
    icon: <ThemeComponent tagName={"IconInsurance"} />,
    path: `/account/${accountId}/insurance`,
    direction: forwards
  }
]

export default menuLoan
