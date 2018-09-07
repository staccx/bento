import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { List, Layout } from "@staccx/base"
import SectionHead from "../components/SectionHead/SectionHead"
import ClientPreview from "../components/ClientPreview/ClientPreview"

const fakeClientsData = [
  {
    _key: "qw89hrgf7",
    name: "Monobank",
    logo: "/img/banklogos/monobank.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet molestie sapien ut mattis. Nunc justo magna, eleifend sed lectus vitae, tempus euismod enim.",
    website: "http://monobank.no/",
    websiteName: "Monobank.no",
    cases: [
      {
        name: "Monobank case study",
        url: "/clients/cases/monobank",
        _key: "fdgdf"
      }
    ]
  },
  {
    _key: "asldn3",
    name: "Aprila",
    logo: "/img/banklogos/aprila.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet molestie sapien ut mattis. Nunc justo magna, eleifend sed lectus vitae, tempus euismod enim.",
    website: "http://aprila.no/",
    websiteName: "Aprila.no",
    cases: [
      {
        name: "Aprila factoring case study",
        url: "/clients/cases/aprila-factoring",
        _key: "qwg"
      },
      {
        name: "Aprila savings account",
        url: "/clients/cases/aprila-online-bank",
        _key: "o2iqrwuhe"
      }
    ]
  },
  {
    _key: "etryu",
    name: "Eika",
    logo: "/img/banklogos/eika.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet molestie sapien ut mattis. Nunc justo magna, eleifend sed lectus vitae, tempus euismod enim.",
    website: "http://eika.no/",
    websiteName: "Eika.no",
    cases: []
  },
  {
    _key: "opawjihugy3w",
    name: "Brage Finans",
    logo: "/img/banklogos/brage.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet molestie sapien ut mattis. Nunc justo magna, eleifend sed lectus vitae, tempus euismod enim.",
    website: "http://brage.no/",
    websiteName: "Brage.no",
    cases: []
  }
]

const Clients = () => (
  <Layout paddingTop="grid" paddingBottom="grid" rowGap="grid">
    <SectionHead heading="Clients" />
    <ClientsList>
      {fakeClientsData.map(client => (
        <li key={client._key}>
          <ClientPreview
            name={client.name}
            logo={client.logo}
            description={client.description}
            website={client.website}
            websiteName={client.websiteName}
            cases={client.cases}
          />
        </li>
      ))}
    </ClientsList>
  </Layout>
)

const ClientsList = styled(List)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spacing.large};
  row-gap: ${spacing.large};
`

export default Clients
