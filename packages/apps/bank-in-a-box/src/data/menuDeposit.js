import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { forwards } from "../components/transitions/transitions"

const menuDeposit = [
  {
    _id: "45fg45dgdfs4",
    label: "Ta ut penger",
    icon: <ThemeComponent tagName={"IconArrowUp"} />,
    path: "/withdraw",
    direction: forwards
  },
  {
    _id: "s45ht456gcf",
    label: "Kontoutskrift",
    icon: <ThemeComponent tagName={"IconProfile"} />,
    path: "/account-statement",
    direction: forwards
  }
]

export default menuDeposit
