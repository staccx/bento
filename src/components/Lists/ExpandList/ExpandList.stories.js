import React from "react"
import ExpandListItem from "./ExpandListItem"
import List from "../List"

export default {
  title: "New/Lists/ExpandList",
  component: ExpandListItem
}

export const ExpandListStandard = args => (
  <List>
    <ExpandListItem title="Hvor lang tid tar det før jeg får svar på søknaden?">
      Du får umiddelbart svar på søknaden og kan se hvor mye du får i lån
    </ExpandListItem>
    <ExpandListItem title="Hvor lang tid tar det før lånet blir utbetalt?">
      Normalt vil du ha pengene på din konto i annen bank en til to virkedager
      etter vi har mottatt søknad og godkjent all dokumentasjon. Om du ønsker
      utbetaling på dagen kontakter du vårt kundesenter.
    </ExpandListItem>
  </List>
)
