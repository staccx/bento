import React from "react"
import styled from "styled-components"
import Confetti from "react-dom-confetti"
import { Layout, Heading, Button, State } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"
import { TranslatedText } from "@staccx/i18n"

const OrderConfirm = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  // TODO: If not logged in, redirect to auth
  return (
    <State>
      {({ change, confettiActive = false }) => {
        setTimeout(() => change({ confettiActive: true }), 1200)

        const confettiConfig = {
          angle: 90,
          spread: 55,
          startVelocity: 65,
          elementCount: 80,
          decay: 0.9
        }

        return (
          <Layout paddingTop="medium" paddingBottom="huge">
            <Heading level={1}>
              <TranslatedText i18nKey="heading-bestillingsbekreftelse" />
            </Heading>
            <p>
              <TranslatedText i18nKey="intro-bestillingsbekreftelse" />
            </p>
            <ConfettiContainer>
              <Confetti active={confettiActive} config={confettiConfig} />
            </ConfettiContainer>
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
      }}
    </State>
  )
}

const ConfettiContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

export default OrderConfirm
