import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { Wrapper, fontSmoothing, Loading, Heading } from "@staccx/base"
import { spacing, color } from "@staccx/theme"
import { SanityDocument } from "@staccx/sanity"
import Logo from "../Logo/Logo"
import { NavLink, Link } from "react-router-dom"

const Footer = ({ heading, callToAction }) => (
  <Container>
    <Wrapper>
      <Content>
        <SanityDocument
          id={"ffe2cd1d-2fed-4436-9942-ad9674dd80ea"}
          pick={"links[]{link->,submenu[]->,...}, ..."}
        >
          {({ document: menu }) => {
            if (!menu) {
              return <Loading />
            }

            console.log(menu)
            const mainMenu = menu.links.filter(menuItem => menuItem.link)
            const subMenus = menu.links.filter(
              m => m.submenu && m.submenu.length > 0
            )
            return (
              <div>
                <div>
                  <Logo inverted />
                </div>
                <div>
                  <SanityDocument id={"8af2f4f3-c1d2-4142-9509-b2c1636fe7a8"}>
                    {staccGroup => {
                      const { document: doc = null } = staccGroup
                      if (!doc) {
                        return null
                      }

                      console.log(staccGroup)
                      const portal = createPortal(
                        <div>Org.nr {doc.orgNr.orgNo}</div>,
                        document.getElementById("orgNr")
                      )
                      return (
                        <div>
                          {doc.name}
                          {doc.address}
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
                      return <div>{document.address}</div>
                    }}
                  </SanityDocument>
                  <div>
                    {mainMenu.map(menuItem => (
                      <li key={menuItem._key}>
                        <NavLink
                          to={menuItem.link.path.current}
                          exact
                          activeClassName="is-current"
                          emphasized={
                            menuItem.emphasized
                              ? menuItem.emphasized.toString()
                              : undefined
                          }
                        >
                          {menuItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </div>
                  <div>
                    {subMenus.map(m => (
                      <div>
                        <Heading level={3}>{m.title}</Heading>
                        <ul>
                          {m.submenu.map(submenuItem => (
                            <li key={submenuItem._id}>
                              <NavLink to={submenuItem.path.current}>
                                {submenuItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div id={"orgNr"} />
                  <Link to={"/privacy-and-cookie-policy"}>
                    Privacy and cookie policy
                  </Link>
                </div>
              </div>
            )
          }}
        </SanityDocument>
      </Content>
    </Wrapper>
  </Container>
)

const Container = styled.footer`
  background-color: ${color.text};
  color: ${color.white};
  padding: ${spacing.large} 0;
  ${fontSmoothing};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    flex-basis: 25%;
  }
`

export default Footer
