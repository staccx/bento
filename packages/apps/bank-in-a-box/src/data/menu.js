import React from "react"
import { ThemeComponent } from "@staccx/base"
import { forwards } from "../components/transitions/transitions"

const menu = [
  {
    _id: "sioahugcf",
    label: "Min profil",
    icon: <ThemeComponent tagName={"IconProfile"} />,
    path: "/profile",
    direction: forwards
  },
  {
    _id: "wiofdh",
    label: "Priser",
    icon: <ThemeComponent tagName={"IconPrices"} />,
    path: "/prices",
    direction: forwards
  },
  {
    _id: "fugya",
    label: "Logg ut",
    icon: <ThemeComponent tagName={"IconLogout"} />,
    path: "/logout",
    direction: forwards
  }
]

export default menu
