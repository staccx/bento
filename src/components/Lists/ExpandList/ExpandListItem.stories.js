import React from "react"
import { storiesOf } from "@storybook/react"
import List from "../List.js"
import ExpandListItem from "./ExpandListItem"
import docs from "./ExpandListItem.md"

storiesOf("components|base/Lists/ExpandList", module)
  .add(
    "Med 2 expands",
    () => {
      return (
        <List variant={"variant"}>
          <ExpandListItem
            variant={"variant"}
            title={
              "Hvor lang tid tar det før jeg får svar på søknaden og hvorfor er denne teksten så lang som den faktisk er og la oss se hvordan dette ser ut?"
            }
          >
            Du får umiddelbart svar på søknaden og kan se hvor mye du får i lån
          </ExpandListItem>
          <ExpandListItem
            variant={"variant"}
            title="Hvor lang tid tar det før lånet blir utbetalt?"
          >
            Normalt vil du ha pengene på din konto i annen bank en til to
            virkedager etter vi har mottatt søknad og godkjent all
            dokumentasjon. Om du ønsker utbetaling på dagen kontakter du vårt
            kundesenter.
          </ExpandListItem>
        </List>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Med 10 Expands",
    () => {
      return (
        <List variant={"variant"}>
          <ExpandListItem variant={"variant"} title={"Dette er en test"}>
            Her er litt mer tekst som vises
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 2"}>
            Dette er test nr 2
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 3"}>
            Dette er test nr 3
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 4"}>
            Dette er test nr 4
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 5"}>
            Dette er test nr 5
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 6"}>
            Dette er test nr 6
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 7"}>
            Dette er test nr 7
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 8"}>
            Dette er test nr 8
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 9"}>
            Dette er test nr 9
          </ExpandListItem>
          <ExpandListItem variant={"variant"} title={"Dette er test nr 10"}>
            Dette er test nr 10
          </ExpandListItem>
        </List>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "lang tekst",
    () => {
      return (
        <List variant={"variant"}>
          <ExpandListItem
            variant={"variant"}
            title={
              "Denne inneholder en lang tekst for å se hvordan dette vil se ut, derfor skriver jeg bare langt bortover med masse tekst som har lite å si"
            }
          >
            Denne teksten er mye kortere enn den lange over
          </ExpandListItem>
        </List>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
