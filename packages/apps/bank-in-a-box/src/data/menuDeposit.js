import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { forwards } from "../components/transitions/transitions"

const menuDeposit = accountId => [
  {
    _id: "45fg45dgdfs4",
    label: "Ta ut penger",
    icon: <ThemeComponent tagName={"IconArrowUp"} />,
    path: `/account/${accountId}/withdraw`,
    direction: forwards
  },
  {
    _id: "s45dsgcf",
    label: "Kontoutskrift",
    icon: <ThemeComponent tagName={"IconAccountStatement"} />,
    path: `/account/${accountId}/account-statement`,
    direction: forwards
  }
]

export default menuDeposit
