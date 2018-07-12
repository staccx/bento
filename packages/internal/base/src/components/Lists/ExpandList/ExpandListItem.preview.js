import React from "react"
import ExpandListItem from "./ExpandListItem"
import List from "../List"

const preview = {
  title: "ExpandListItem",
  category: "component/List",
  component: ExpandListItem,
  render: ({ variant }) => (
    <React.Fragment>
      <List variant={variant}>
        <ExpandListItem
          variant={variant}
          title="Hvor lang tid tar det før jeg får svar på søknaden og hvorfor er denne teksten så lang som den faktisk er og la oss se hvordan dette ser ut?"
        >
          Du får umiddelbart svar på søknaden og kan se hvor mye du får i lån.
        </ExpandListItem>
        <ExpandListItem
          variant={variant}
          title="Hvor lang tid tar det før lånet blir utbetalt?"
        >
          Normalt vil du ha pengene på din konto i annen bank en til to
          virkedager etter vi har mottatt søknad og godkjent all dokumentasjon.
          Om du ønsker utbetaling på dagen kontakter du vårt kundesenter.
        </ExpandListItem>
      </List>
    </React.Fragment>
  )
}

export default preview
