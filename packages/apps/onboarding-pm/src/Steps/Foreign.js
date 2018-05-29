import React from "react"
import styled from "styled-components"
import {
  Wrapper,
  Heading,
  Button,
  CheckBox,
  Select,
  SelectOption,
  Flag,
  Paragraph
} from "@staccx/base"
import { targetSize, color, spacing, fontFamily, font } from "@staccx/theme"
import { countries } from "countries-list"
import Form from "../Components/Form"

const SelectCountry = ({ selectedItem, ...restProps }) => {
  return (
    <SelectedCountry {...restProps}>
      <Flag small img={selectedItem.emoji}>
        {selectedItem.name}
      </Flag>
    </SelectedCountry>
  )
}

const Foreign = ({ steps }) => (
  <Form>
    <Heading level="2">Utenlandsk statsborgerskap/ skatteplikt</Heading>
    <div>
      <Fieldset>
        <Select
          onChange={selectedItem => console.log(selectedItem)}
          label="Land"
          selectedElement={SelectCountry}
          key={"iwodn21"}
          placeHolderLabel={"Velg…"}
        >
          {Object.entries(countries).map(item => (
            <SelectOption key={item[0]} data={item[1]}>
              <Flag small img={item[1].emoji}>
                {item[1].name}
              </Flag>
            </SelectOption>
          ))}
        </Select>
        <CheckBox id="skattePliktig" value="foreignCitizenExposed">
          Jeg er skattepliktig til dette landet
        </CheckBox>
      </Fieldset>
      <Button variant="secondary" onClick={() => console.log("flere-land")}>
        Legg til flere land
      </Button>
    </div>
    <CheckBox id="dfkjlsdf" value="foreignCitizenExposed">
      Jeg er eller har vært politisk eksponert person i utlandet.
    </CheckBox>
    <Paragraph variant="legalese">
      Ved å klikke fullfør bekrefter du at opplysningene ovenfor er korrekte.
    </Paragraph>
    <Button variant="primary" onClick={() => steps.confirmation()}>
      Fullfør
    </Button>
  </Form>
)

const SelectedCountry = styled.div`
  width: 100%;
  min-height: ${targetSize.normal};
  margin: 0 auto;
  border: 1px solid ${color.line};
  padding: ${spacing.tiny} ${spacing.mediumPlus} ${spacing.tiny}
    ${spacing.small};
  text-align: left;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  pointer: cursor;
  transition: border-color 0.2s ease-out;
  display: flex;
  align-items: center;
`

const Fieldset = styled.fieldset`
  border-bottom: 1px solid ${color.line};
  padding-bottom: ${spacing.small};
  margin-bottom: ${spacing.medium};
`

export default Foreign
