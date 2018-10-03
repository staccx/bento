import React from "react"
import styled from "styled-components"
import { spacing, font, color } from "@staccx/theme"
import { Wrapper, Layout, Heading } from "@staccx/base"
import SectionHeading from "../SectionHeading/SectionHeading"

const Comparison = ({ heading, comparison }) => (
  <Content>
    <Wrapper size="largePlus">
      <SectionHeading>{heading}</SectionHeading>
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>imove</th>
              <th>Leasing</th>
              <th>Kjøpe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ingen startleie</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  padding: ${spacing.huge} ${spacing("largePlusPlus")};
`

export default Comparison
