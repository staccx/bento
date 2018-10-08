import React from "react"
import { Layout, List, Heading, Button } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"
import CarHeader from "../../components/CarHeader/CarHeader"
import BackButton from "../../components/BackButton/BackButton"
import { TranslatedText } from "@staccx/i18n"

const OrderBook = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  return (
    <Layout paddingTop="medium" paddingBottom="huge">
      <BackButton to={`/app/car/${car.chassisNumber}`} label={"Tilbake"} />
      <img src={car.images[0]} alt="" />
      <CarHeader make={car.make} model={car.model} price={car.pricePerMonth} />
      <p>
        <TranslatedText i18nKey="orderbook-intro-included" />
      </p>
      <div>
        <Layout rowGap="tiny">
          <Heading level={6}>
            <TranslatedText i18nKey="orderbook-subheading" />
          </Heading>
          <List variant="bullets">
            <li>
              <TranslatedText i18nKey="orderbook-listitem-1" />
            </li>
            <li>
              <TranslatedText i18nKey="orderbook-listitem-2" />
            </li>
            <li>
              <TranslatedText i18nKey="orderbook-listitem-3" />
            </li>
          </List>
        </Layout>
      </div>
      <p>
        <TranslatedText i18nKey="orderbook-subtext" />
      </p>
      <Link to={`/app/car/${match.params.chassisNumber}/confirm`}>
        <Button>
          <TranslatedText i18nKey="orderbook-knapp-confirm" />
        </Button>
      </Link>
    </Layout>
  )
}

export default OrderBook
