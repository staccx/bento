import React, { Component } from "react"
import styled from "styled-components"
import {
  Heading,
  Button,
  CheckBox,
  Select,
  SelectOption,
  Flag,
  Paragraph,
  Input,
  Divider,
  Wrapper,
  Layout
} from "@staccx/base"
import { theming } from "@staccx/base"
import { countries } from "countries-list"

const SelectCountry = ({ selectedItem, ...restProps }) => {
  return (
    <SelectedCountry {...restProps}>
      <Flag small img={selectedItem.emoji}>
        {selectedItem.name}
      </Flag>
    </SelectedCountry>
  )
}

class Foreign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taxable: false,
      filter: null
    }
  }

  taxable() {
    this.setState({
      taxable: !this.state.taxable
    })
  }

  render() {
    return (
      <Wrapper size="small">
        <Layout rowGap="large" paddingTop="huge" paddingBottom="large">
          <Heading level="2">Utenlandsk statsborgerskap/ skatteplikt</Heading>
          <Layout>
            <Select
              onChange={selectedItem => console.log(selectedItem)}
              label="Land"
              selectedElement={SelectCountry}
              key={"iwodn21"}
              placeHolderLabel={"Velg…"}
              onInputValueChange={filter => {
                this.setState({ filter })
              }}
            >
              {Object.keys(countries)
                .map(key => countries[key])
                .filter(item =>
                  this.state.filter
                    ? item.name.startsWith(this.state.filter)
                    : item
                )
                .map(item => (
                  <SelectOption key={item.name} data={item}>
                    <Flag small img={item.emoji}>
                      {item.name}
                    </Flag>
                  </SelectOption>
                ))}
            </Select>
            <CheckBox
              id="skattePliktig"
              value="ForeignTax"
              onChange={() => this.taxable()}
            >
              Jeg er skattepliktig til dette landet
            </CheckBox>
            {this.state.taxable && (
              <React.Fragment>
                <Input
                  id="idnummer"
                  label="Identifikasjonsnummer for skatterapportering"
                />
                <Input id="taxadress" label="Skattemessig adresse utland" />
              </React.Fragment>
            )}
            <Divider />
            <div>
              <Button
                variant="secondary"
                onClick={() => console.log("flere-land")}
              >
                Legg til flere land
              </Button>
            </div>
          </Layout>
          <CheckBox id="dfkjlsdf" value="foreignCitizenExposed">
            Jeg er eller har vært politisk eksponert person i utlandet.
          </CheckBox>
          <Paragraph variant="legalese">
            Ved å klikke fullfør bekrefter du at opplysningene ovenfor er
            korrekte.
          </Paragraph>
          <Button
            variant="primary"
            onClick={() => this.props.steps.confirmation()}
          >
            Fullfør
          </Button>
        </Layout>
      </Wrapper>
    )
  }
}

const SelectedCountry = styled.div`
  width: 100%;
  min-height: ${theming.targetSize.normal};
  margin: 0 auto;
  border: 1px solid ${theming.color.line};
  padding: ${theming.spacing.tiny} ${theming.spacing.mediumPlus}
    ${theming.spacing.tiny} ${theming.spacing.small};
  text-align: left;
  font-family: ${theming.fontFamily.body()};
  font-size: ${theming.font.input};
  pointer: cursor;
  transition: border-color 0.2s ease-out;
  display: flex;
  align-items: center;
`

export default Foreign
