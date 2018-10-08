import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {
  Button,
  Text,
  Heading,
  Layout,
  Input,
  Wrapper,
  CheckGroup,
  CheckBox
} from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import { backwards } from "../components/transitions/transitions"

const OrderAdditional = () => (
  <Wrapper size="small">
    <Layout paddingBottom="huge">
      <Heading level="1">
        <TranslatedText i18nKey="heading-order-additional" />
      </Heading>
      <div>
        <CheckGroup group={"additionalNeeds"}>
          <CheckBox id={"cabin"} variant={"iconBox"}>
            Kjøre til hytten
          </CheckBox>
          <CheckBox id={"hanger"} variant={"iconBox"}>
            Hengerfeste
          </CheckBox>
          <CheckBox id={"fivePlus"} variant={"iconBox"}>
            Kjøre flere enn fem
          </CheckBox>
          <CheckBox id={"sportsCar"} variant={"iconBox"}>
            Sportsbil
          </CheckBox>
          <CheckBox id={"transport"} variant={"iconBox"}>
            Varetransport
          </CheckBox>
        </CheckGroup>
      </div>
      <div>
        <Heading level="2">
          <TranslatedText i18nKey="heading-order-additional-date" />
        </Heading>
        <Input label={"Fra"} type={"date"} id={"dateFrom"} />
        <Input label={"Til"} type={"date"} id={"dateTo"} />

        <div>
          <Link to={"/app/order-additional/confirmation"}>
            <Button>
              <TranslatedText i18nKey="knapp-bestill-tillegg" />
            </Button>
          </Link>
          <Link
            to={{
              pathname: "/app/my-car",
              state: {
                transition: "backwards"
              }
            }}
          >
            <Button variant="secondary">
              <TranslatedText i18nKey="knapp-tilbake" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  </Wrapper>
)

export default OrderAdditional
