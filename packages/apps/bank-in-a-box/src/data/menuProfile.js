import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { forwards } from "../components/transitions/transitions"
import customer from "../data/customer"

const menuProfile = [
  {
    _id: "aerkjert9=",
    label: (
      <div>
        {customer.mail} <br /> {customer.tel} <br /> {customer.adress},{" "}
        {customer.zip} {customer.location}
      </div>
    ),
    icon: <ThemeComponent tagName={"IconArrowUp"} />,
    path: `/profile/edit`,
    direction: forwards
  },
  {
    _id: "dfgs45dgfs645",
    label: "Årsoppgave",
    icon: <ThemeComponent tagName={"IconProfile"} />,
    path: `/profile/annual-statement`,
    direction: forwards
  },
  {
    _id: "fsd456ds56dfs768fs",
    label: "Avtaledokumenter",
    icon: <ThemeComponent tagName={"IconProfile"} />,
    path: `/profile/contract-documents`,
    direction: forwards
  }
]

export default menuProfile
