import React from "react"
import styled from "styled-components"
import { color, font, spacing } from "@staccx/theme"
import { SanityDocument } from "@staccx/sanity"
import { Layout, Heading } from "@staccx/base"
import { NavLink } from "react-router-dom"

const FooterNavigation = ({ heading, callToAction }) => (
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
                      emphasized={
                        menuItem.emphasized
                          ? menuItem.emphasized.toString()
                          : undefined
                      }
                    >
                      {menuItem.title}
                    </FooterNavLink>
                  </li>
                ))}
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
                          {submenuItem.name}
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
  grid-row-gap: ${spacing.tiny};
  padding-top: ${spacing.tiny};
`

const SubNavHeading = styled(Heading)`
  font-size: ${font.base};
  color: #929292;
  font-weight: normal;
`

const FooterNav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: ${spacing.small};
`

const FooterNavLink = styled(NavLink)`
  color: ${color.white};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: ${color.primary};
  }
`

export default FooterNavigation
