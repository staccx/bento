import React from "react"
import { Heading, Button } from "@staccx/base"
import NewsHero from "../components/News/News.Hero"
const newsItems = [
  {
    title: "Leasing kampanje",
    body: "Bacon ipsum dolor amet prosciutto",
    image: "https://source.unsplash.com/p7tai9P7H-s/1600x900",
    actionText: "Mer om leasing-kampanjen",
    actionUrl: "/news/lease",
    featured: true
  },
  {
    title: "GDPR – Hva betyr det for vårt samarbeid?",
    body: "Bacon ipsum dolor amet prosciutto",
    actionText: "Bli kjent med GDPR",
    actionUrl: "/news/gdpr"
  },
  {
    title: "Nye retningslinjer - gyldig legitimasjon",
    body: "Bacon ipsum dolor amet prosciutto",
    actionText: "Les om legitimasjon",
    actionUrl: "/news/legitimasjon"
  },
  {
    title: "Elektronisk salgsmelding",
    body: "Bacon ipsum dolor amet prosciutto",
    actionText: "Selg enda mer",
    actionUrl: "/news/esalg"
  },
  {
    title: "Utkjøp og avlesning av kilometerstand",
    body: "Bacon ipsum dolor amet prosciutto",
    actionText: "Bli en utkjøpsmester",
    actionUrl: "/news/utkjop"
  }
]

const Home = () => (
  <div>
    <header>
      <NewsHero article={newsItems[0]} />
    </header>

    <Heading level={1}>Welcome home</Heading>
    <Button type="button">Nordea button</Button>
  </div>
)

export default Home
