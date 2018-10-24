import React from "react"
import styled from "styled-components"
import { SanityDocument } from "@staccx/sanity"
import { Layout, Heading, theming } from "@staccx/base"
import { NavLink } from "react-router-dom"

const FooterNavigation = ({ heading, callToAction, openContactForm }) => (
  <SanityDocument
    id={"ffe2cd1d-2fed-4436-9942-ad9674dd80ea"}
    pick={"links[]{link->,submenu[]->,...}, ..."}
  >
    {({ document: menu }) => {
      if (!menu) {
        return null
      }

      const mainMenu = menu.links.filter(menuItem => menuItem.link)
      const subMenus = menu.links.filter(m => m.submenu && m.submenu.length > 0)

      return (
        <Layout rowGap="large">
          <div>
            <nav>
              <FooterNav>
                {mainMenu.map(menuItem => (
                  <li key={menuItem._key}>
                    <FooterNavLink
                      to={menuItem.link.path.current}
                      exact
                      activeClassName="is-current"
                    >
                      {menuItem.title}
                    </FooterNavLink>
                  </li>
                ))}
                <li key={"footer_getinTouch"}>
                  <FooterNavLink
                    to={window.location}
                    onClick={openContactForm}
                    activeClassName="is-current"
                  >
                    Get in touch
                  </FooterNavLink>
                </li>
              </FooterNav>
            </nav>
          </div>
          <div>
            <Layout>
              {subMenus.map(m => (
                <div key={m._key}>
                  <SubNavHeading level={3}>{m.title}</SubNavHeading>
                  <SubNav>
                    {m.submenu.map(submenuItem => (
                      <li key={submenuItem._id}>
                        <FooterNavLink to={submenuItem.path.current}>
                          {submenuItem.title}
                        </FooterNavLink>
                      </li>
                    ))}
                  </SubNav>
                </div>
              ))}
            </Layout>
          </div>
        </Layout>
      )
    }}
  </SanityDocument>
)

const SubNav = styled.ul`
  display: grid;
  grid-row-gap: ${theming.spacing.tiny};
  padding-top: ${theming.spacing.tiny};
`

const SubNavHeading = styled(Heading)`
  font-size: ${theming.font.base};
  color: #929292;
  font-weight: normal;
`

const FooterNav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: ${theming.spacing.small};
  flex-wrap: wrap;
`

const FooterNavLink = styled(NavLink)`
  color: ${theming.color.white};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: ${theming.color.primary};
  }
`

export default FooterNavigation
