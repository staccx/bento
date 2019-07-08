import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { Layout, Heading, theming } from "@staccx/base"
import Logo from "../Logo/Logo"
import { SanityDocument } from "@staccx/sanity"
import { Link } from "react-router-dom"

const createAddress = address => {
  const lines = address.split("\n")
  return (
    <div>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p>
        <FooterA
          target={"_blank"}
          href={`https://www.google.no/maps/place/${lines[0].replace(
            " ",
            "+"
          )},${lines[1].replace(" ", "+")}/`}
        >
          View on map
        </FooterA>
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

              const outbound = createPortal(
                <div>
                  <ul>
                    {doc.outboundLinks.map(link => (
                      <li key={link._key}>
                        <FooterA href={link.url} target={"_blank"}>
                          {link.title}
                        </FooterA>
                      </li>
                    ))}
                  </ul>
                </div>,
                document.getElementById("outboundLinks")
              )

              return (
                <div>
                  <CompanyName level={1}>{doc.name}</CompanyName>
                  {createAddress(doc.address)}
                  {portal}
                  {outbound}
                </div>
              )
            }}
          </SanityDocument>
          <div>
            <Layout>
              <div>
                <div id={"orgNr"} />
                <FooterLink to={"/privacy-and-cookie-policy"}>
                  Privacy and cookie policy
                </FooterLink>
              </div>
              <div id={"outboundLinks"} />
            </Layout>
          </div>
        </Layout>
      </Container>
    </div>
  </Layout>
)

const Container = styled.div`
  color: ${theming.color("g2")};
`

const CompanyName = styled(Heading)`
  font-size: ${theming.font.h3};
  font-weight: normal;
  color: ${theming.color.white};
  margin-bottom: ${theming.spacing.medium};
`

const FooterLink = styled(Link)`
  color: #929292;
  text-decoration: none;
  font-family: ${theming.fontFamily.heading};

  &:hover,
  &:active,
  &:focus {
    color: ${theming.color.primary};
  }
`

const FooterA = FooterLink.withComponent("a")

export default FooterCompanyInfo