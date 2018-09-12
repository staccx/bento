import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { forwards } from "../components/transitions/transitions"

const menuLoan = [
  {
    _id: "s45ht456gcf",
    label: "Kontoutskrift",
    icon: <ThemeComponent tagName={"IconProfile"} />,
    path: "/account-statement",
    direction: forwards
  },
  {
    _id: "tetr",
    label: "Faktura",
    icon: <ThemeComponent tagName={"IconArrowUp"} />,
    path: "/invoice",
    direction: forwards
  },
  {
    _id: "hgffghd654h",
    label: "Endre forfallsdag",
    icon: <ThemeComponent tagName={"IconLogout"} />,
    path: "/due",
    direction: forwards
  },
  {
    _id: "hgfdd12dhfg",
    label: "Betalingsforsikring",
    icon: <ThemeComponent tagName={"IconLogout"} />,
    path: "/insurance",
    direction: forwards
  }
]

export default menuLoan
