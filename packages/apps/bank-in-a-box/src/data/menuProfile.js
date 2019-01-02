import React from "react"
import { ThemeComponent } from "@staccx/base"
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
    icon: <ThemeComponent tagName={"IconProfile"} />,
    path: `/profile/edit`,
    direction: forwards
  },
  {
    _id: "dfgs45dgfs645",
    label: "Årsoppgave",
    icon: <ThemeComponent tagName={"IconAnnualStatement"} />,
    path: `/profile/annual-statement`,
    direction: forwards
  },
  {
    _id: "fsd456ds56dfs768fs",
    label: "Avtaledokumenter",
    icon: <ThemeComponent tagName={"IconContracts"} />,
    path: `/profile/contract-documents`,
    direction: forwards
  },
  {
    _id: "fjdklfgdjkl56454456",
    label: "Avslutt konto",
    icon: <ThemeComponent tagName={"IconContracts"} />,
    path: `/profile/end`,
    direction: forwards
  }
]

export default menuProfile
