import React, { Component, useState } from "react"
import {
  BirthdateInput,
  Wrapper,
  Combobox,
  GlobalStyle,
  Layout,
  WebFonts,
  Input,
  Label,
  Button,
  List,
  CreditCardInput,
  PhoneInput,
  PostalCodeInput,
  NationalIdInput,
  AccountInput,
  CurrencyInput,
  Select2,
  Select,
  CompanyInput,
  ExpandListItem,
  Loading,
  Slider2,
  Paragraph,
  theming,
  Form,
  FormField,
  Breadcrumb
} from "@staccx/base"
import { LanguageProvider, TranslatedText } from "@staccx/i18n"
import styled, { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"
import texts from "./i18n.json"

const options = [
  { value: "apple", misc: "cool" },
  { value: "pear", misc: "Ermagerdh" },
  { value: "orange", misc: "Ermagerdh" },
  { value: "grape", misc: "Ermagerdh" },
  { value: "banana", misc: "Ermagerdh" },
  { value: "bananas", misc: "Ermagerdh" },
  { value: "bananas2", misc: "Ermagerdh" },
  { value: "coolio", misc: "Ermagerdh" }
]

const renderOption = (getItemProps, highlightedIndex, selectedItem) => (
  item,
  index
) => {
  return (
    <li
      {...getItemProps({
        key: item.value,
        index,
        item,
        style: {
          backgroundColor: highlightedIndex === index ? "lightgray" : "white",
          fontWeight: selectedItem === item ? "bold" : "normal"
        }
      })}
    >
      {item.value}
    </li>
  )
}

const renderInput = getItemProps => (
  <Input placeholder={"input here"} {...getItemProps()} />
)

const renderSelected = (selectedItem, getInputProps, { clearSelection }) => (
  <span>
    <Input {...getInputProps()} />
    <Button onClick={clearSelection}>Clear</Button>
  </span>
)

const renderLabel = getLabelOptions => (
  <Label {...getLabelOptions()}>Fruit</Label>
)

const App = () => {
  const [postalDefault, setPostalDefault] = useState(2000)
  console.log(postalDefault)

  return (
    <LanguageProvider
      texts={texts}
      language={"nb"}
      languages={["nb", "en"]}
      debug
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Wrapper>
            <GlobalStyle />
            <WebFonts />

            <Layout>
              <div>
                <Input
                  defaultValue={postalDefault}
                  onChange={e => setPostalDefault(e.target.value)}
                />
              </div>
              <div>
                <PostalCodeInput
                  label={"Ingen default value"}
                  id={"1"}
                  onChange={({ postalCode, place }) =>
                    console.log(postalCode, place)
                  }
                />
                <PostalCodeInput
                  label={"Med default value"}
                  id={"2"}
                  defaultValue={postalDefault}
                />
              </div>
            </Layout>
            <PadBox>
              <Breadcrumb
                path={[
                  {
                    name: "Home",
                    to: "/"
                  },
                  {
                    name: "Level 2",
                    to: "/level-2"
                  },
                  {
                    name: "Current page"
                  },
                  {
                    name: "Last page",
                    to: "/level-4"
                  }
                ]}
              />
            </PadBox>
            <List>
              <ExpandListItem title={"i18n"}>
                <TranslatedText i18nKey={"bugskey"}>
                  Fallback Text
                </TranslatedText>
                <TranslatedText i18nKey={"INVOICE"}>
                  {value => <Paragraph>{value}</Paragraph>}
                </TranslatedText>
                <TranslatedText />
                <TranslatedText>Just doing stuff</TranslatedText>
              </ExpandListItem>
              <ExpandListItem title={"Inputs"} expanded>
                <Layout paddingTop="huge" paddingBottom="huge" rowGap={"large"}>
                  <BirthdateInput
                    id="bdaaaay"
                    names={["wasd1", "wasd2", "wasd3"]}
                    label={"Your birthday"}
                    onComplete={value => console.log("onComplete: ", value)}
                    onChange={value => console.log("onChange: ", value)}
                    aria-labelledby="rg1_label"
                  />
                  <BirthdateInput
                    ids={["bday", "bmnth", "byr"]}
                    labels={["bday", "bmnth", "byr"]}
                    onComplete={value => console.log("onComplete: ", value)}
                    onChange={value => console.log("onChange: ", value)}
                  />
                  <BirthdateInput
                    id={"asnjda"}
                    ids={["bday", "bmnth", "byr"]}
                    names={["bday", "bmnth", "byr"]}
                    label={"Superflous"}
                    labels={["bday", "bmnth", "byr"]}
                    onComplete={value => console.log("onComplete: ", value)}
                    onChange={value => console.log("onChange: ", value)}
                  />
                </Layout>
                <CompanyInput id={"test"} />
                <Select
                  items={options}
                  itemToString={item => item.value}
                  itemToKey={item => item.value}
                  placeHolderLabel={"Velg..."}
                  onChange={() => null}
                />
                <Combobox
                  onChange={console.log}
                  renderInput={renderInput}
                  renderSelected={renderSelected}
                  renderLabel={renderLabel}
                  listComponent={List}
                  filter={["value", "misc"]}
                  indexer={"value"}
                  options={options}
                  initialSelectedItem={options[1]}
                >
                  {({
                    result,
                    getItemProps,
                    highlightedIndex,
                    selectedItem
                  }) => (
                    <List>
                      {result.map(
                        renderOption(
                          getItemProps,
                          highlightedIndex,
                          selectedItem
                        )
                      )}
                    </List>
                  )}
                </Combobox>
                <Select2
                  options={options}
                  renderSelected={(selectedItem, getToggleButtonProps) => (
                    <Button {...getToggleButtonProps()}>
                      {selectedItem.value}
                    </Button>
                  )}
                  renderLabel={renderLabel}
                  renderPlaceholder={getToggleButtonProps => (
                    <Button {...getToggleButtonProps()}>Velg...</Button>
                  )}
                  onChange={console.log}
                >
                  {({
                    selectedItem,
                    options,
                    getItemProps,
                    highlightedIndex
                  }) => {
                    return (
                      <List>
                        {options.map(
                          renderOption(
                            getItemProps,
                            highlightedIndex,
                            selectedItem
                          )
                        )}
                      </List>
                    )
                  }}
                </Select2>
                <CreditCardInput label={"Credit Card"} />
                <PhoneInput
                  placeholder={"This has a variant on it"}
                  variant={"cool"}
                  label={"Phone number"}
                  onChange={console.warn}
                />
                <NationalIdInput label={"National Id"} id={"tsa"} />
                <PostalCodeInput label={"Postal code"} onChange={console.log} />
                <AccountInput label={"Account number"} />
                <CurrencyInput label={"Currency"} />
              </ExpandListItem>
              <ExpandListItem title={"Loaders"}>
                {/* <ExpandListItem title={"Loaders"} isOpen> */}
                <Loading />
                <hr style={{ margin: 24 }} />
                <Loading
                  variant={"circles"}
                  color={theming.color.primary()({ theme })}
                />
                <hr style={{ margin: 24 }} />
                <Loading
                  variant={"atom"}
                  color={theming.color.primary()({ theme })}
                />
                <hr style={{ margin: 24 }} />
                <Loading
                  variant={"breeding"}
                  color={theming.color.primary()({ theme })}
                />

                <hr style={{ margin: 24 }} />
                <Loading
                  variant={"finger"}
                  color={theming.color.primary()({ theme })}
                  size={64}
                />
                <hr style={{ margin: 24 }} />
                <Loading
                  variant={"climbing"}
                  color={theming.color.primary()({ theme })}
                  size={32}
                  sizeUnit={"px"}
                />
              </ExpandListItem>
              <Slider2 min={20000} max={100000} step={10000} value={50000} />
              <Form onSubmit={console.log}>
                <div>
                  <FormField name="amount" type="string" required>
                    {({ name, field, form }) => (
                      <Input
                        label="Beløp"
                        placeholder="0"
                        type="tel"
                        id="telwithdraw"
                        defaultValue={0}
                        {...field}
                      />
                    )}
                  </FormField>
                  <div>
                    <FormField name="omg" type="number" required>
                      {({ name, field, form }) => {
                        const { value, ...rest } = field
                        return (
                          <Input
                            label="Wat"
                            placeholder="0"
                            type="tel"
                            id="telwithdraw"
                            {...rest}
                            defaultValue={0}
                            onChange={e =>
                              form.setFieldValue("omg", e.target.value)
                            }
                          />
                        )
                      }}
                    </FormField>
                  </div>
                </div>
              </Form>
            </List>
          </Wrapper>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

const PadBox = styled.div`
  padding: ${theming.spacing.huge} 0;
`

export default App
