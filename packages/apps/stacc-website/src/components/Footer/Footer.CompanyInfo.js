import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { Layout, Heading } from "@staccx/base"
import { color, font, spacing } from "@staccx/theme"
import Logo from "../Logo/Logo"
import { SanityDocument } from "@staccx/sanity"

const createAddress = address => {
  const lines = address.split("\n")
  return (
    <div>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p>
        <FooterLink
          href={`https://www.google.no/maps/place/${lines[0].replace(
            " ",
            "+"
          )},${lines[1].replace(" ", "+")}/`}
        >
          View on map
        </FooterLink>
      </p>
    </div>
  )
}

const FooterCompanyInfo = ({ heading }) => (
  <Layout rowGap="large">
    <div>
      <Logo inverted isOnBlack />
    </div>
    <div>
      <Container>
        <Layout>
          <SanityDocument id={"8af2f4f3-c1d2-4142-9509-b2c1636fe7a8"}>
            {staccGroup => {
              const { document: doc = null } = staccGroup
              if (!doc) {
                return null
              }

              const portal = createPortal(
                <div>Org.nr {doc.orgNr.orgNo}</div>,
                document.getElementById("orgNr")
              )

              return (
                <div>
                  <CompanyName level={1}>{doc.name}</CompanyName>
                  {createAddress(doc.address)}
                  {portal}
                </div>
              )
            }}
          </SanityDocument>
          <SanityDocument id={"e96b6174-1228-4455-ab76-3d43597961b6"}>
            {insight => {
              const { document = null } = insight
              if (!document) {
                return null
              }

              // TODO: This is Stacc Insight document
              return <div>{createAddress(document.address)}</div>
            }}
          </SanityDocument>
          <div>
            <div id={"orgNr"} />
            <FooterLink to={"/privacy-and-cookie-policy"}>
              Privacy and cookie policy
            </FooterLink>
          </div>
        </Layout>
      </Container>
    </div>
  </Layout>
)

const Container = styled.div`
  color: ${color("g2")};
`

const CompanyName = styled(Heading)`
  font-size: ${font.h3};
  font-weight: normal;
  color: ${color.white};
  margin-bottom: ${spacing.medium};
`

const FooterLink = styled.a`
  color: #929292;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: ${color.primary};
  }
`

export default FooterCompanyInfo
