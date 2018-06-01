import React from "react"
import {
  Heading,
  Button,
  Input,
  CurrencyInput,
  Label,
  RadioPill,
  RadioPillItem,
  Layout,
  Wrapper
} from "@staccx/base"

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
    <Wrapper size="small">
      <Layout rowGap="large" paddingTop="huge" paddingBottom="large">
        <Heading level="2">Opprinnelse av pengene</Heading>
        {(origin.salary || origin.savings) && (
          <Layout>
            <Heading level="3">
              Du oppga at pengene kom fra lønn/pensjon/sparing.
            </Heading>
            <div>
              <Label>Hvor mange år er midlene spart opp over?</Label>
              <RadioPill
                full
                onChange={() => console.log}
                group={"salaryLength"}
              >
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
          </Layout>
        )}

        {origin.gift && (
          <Layout>
            <Heading level="3">
              Du oppga at noe av pengene kommer fra en gave
            </Heading>
            <Input label="Hva er gavens opprinnelse?" id="csadj3" />
            <CurrencyInput
              label="Hva er gavens totale størrelse?"
              suffix={" kr"}
              placeholder="0 kr"
              id="d34d2"
            />
          </Layout>
        )}

        {origin.inheritance && (
          <Layout>
            <Heading level="3">
              Du oppga at noe av pengene kommer fra arv
            </Heading>
            <Input label="Hva er relasjonen til den avdøde?" id="ds3230r" />
            <Input label="Når falt dødsfallet sted?" id=" n3232" />
            {/* TODO: Trenger dato-komponent */}
            <CurrencyInput
              label="Hvor mye ble arvet?"
              suffix={" kr"}
              placeholder="0 kr"
              id="cjkh443"
            />
          </Layout>
        )}

        {origin.property && (
          <Layout>
            <Heading level="3">
              Du oppga at noe av pengene kommer fra salg av eiendom
            </Heading>
            <Input
              label="Hva er adressen på eiendommen som er solgt?"
              id="fvncnj434"
            />
            <Input label="Når ble salget utført?" id="h325" />
            {/* TODO: Trenger dato-komponent */}
            <CurrencyInput
              label="Hva var salgssummen?"
              suffix={" kr"}
              placeholder="0 kr"
              id="dsajk3232"
            />
          </Layout>
        )}
        {origin.other && (
          <Layout>
            <Input label="Hva er opprinnelsen til pengene?" id="fvncnj434" />
          </Layout>
        )}

        <Button variant="primary" onClick={() => steps.foreign()}>
          Neste steg
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default SanctionList
