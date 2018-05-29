import React from "react"
import {
  Heading,
  Button,
  Input,
  CurrencyInput,
  Label,
  RadioPill,
  RadioPillItem
} from "@staccx/base"
import Form from "../Components/Form"
import Fieldset from "../Components/Fieldset"

const SavingsYear = [
  {
    myUniqueId: "221e98j",
    value: 0,
    label: "0-2"
  },
  {
    myUniqueId: "ads31",
    value: 3,
    label: "3-5"
  },
  {
    myUniqueId: "h14",
    value: 5,
    label: "5-10"
  },
  {
    myUniqueId: "fdsjkl34",
    value: 10,
    label: "10 +"
  }
]

const SanctionList = ({ steps, origin }) => {
  console.log(origin)
  return (
    <Form>
      <Heading level="2">Opprinnelse av pengene</Heading>
      {(origin.salary || origin.savings) && (
        <Fieldset>
          <div>
            <Label>Hvor mange år er midlene spart opp over?</Label>
            <RadioPill full onChange={() => console.log} group={"salaryLength"}>
              {SavingsYear.map(listItem => (
                <RadioPillItem
                  key={listItem.myUniqueId}
                  value={listItem.value}
                  defaultChecked={listItem.defaultChecked}
                  id={listItem.myUniqueId}
                >
                  {listItem.label}
                </RadioPillItem>
              ))}
            </RadioPill>
          </div>

          <Input label="Hva er kilden til sparingen?" id="r4jk443" />
        </Fieldset>
      )}

      {origin.gift && (
        <Fieldset>
          <Heading level="3">
            Du oppga at noe av pengene kommer fra en gave
          </Heading>
          <Input label="Hva er gavens opprinnelse?" id="csadj3" />
          <CurrencyInput label="Hva er gavens totale størrelse?" id="d34d2" />
        </Fieldset>
      )}

      {origin.inheritance && (
        <Fieldset>
          <Heading level="3">Du oppga at noe av pengene kommer fra arv</Heading>
          <Input label="Hva er relasjonen til den avdøde?" id="ds3230r" />
          <Input label="Når falt dødsfallet sted?" id=" n3232" />
          {/* TODO: Trenger dato-komponent */}
          <CurrencyInput label="Hvor mye ble arvet?" id="cjkh443" />
        </Fieldset>
      )}

      {origin.property && (
        <Fieldset>
          <Heading level="3">
            Du oppga at noe av pengene kommer fra salg av eiendom
          </Heading>
          <Input
            label="Hva er adressen på eiendommen som er solgt?"
            id="fvncnj434"
          />
          <Input label="Når ble salget utført?" id="h325" />
          {/* TODO: Trenger dato-komponent */}
          <CurrencyInput label="Hva var salgssummen?" id="dsajk3232" />
        </Fieldset>
      )}
      {origin.other && (
        <Fieldset>
          <Input label="Hva er opprinnelsen til pengene?" id="fvncnj434" />
        </Fieldset>
      )}

      <Button variant="primary" onClick={() => steps.foreign()}>
        Neste steg
      </Button>
    </Form>
  )
}

export default SanctionList
