import React from "react"
import { Layout, Heading, Button } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"
import { TranslatedText } from "@staccx/i18n"

const OrderConfirm = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  // TODO: If not logged in, redirect to auth
  return (
    <Layout paddingTop="medium" paddingBottom="huge">
      <Heading level={1}>
        <TranslatedText i18nKey="heading-bestillingsbekreftelse" />
      </Heading>
      <p>
        <TranslatedText i18nKey="intro-bestillingsbekreftelse" />
      </p>
      <img src={car.images[0]} alt="" />
      <div>
        <div>
          {car.make} {car.model}
        </div>
        <div>{car.pricePerMonth}</div>
      </div>
      <Link to={`/app/my-car`}>
        <Button>
          <TranslatedText i18nKey="knapp-bestillingsbekreftelse-ferdig" />
        </Button>
      </Link>
    </Layout>
  )
}

export default OrderConfirm
