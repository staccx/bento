import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Wrapper } from "@staccx/base"
import SectionHeading from "../SectionHeading/SectionHeading"

const Comparison = ({ heading, headers, rows }) => (
  <Content>
    <Wrapper size="largePlus">
      <SectionHeading>{heading}</SectionHeading>
      <div>
        <table>
          <thead>
            <tr>
              <th>{headers.desc}</th>
              <th>{headers.imove}</th>
              <th>{headers.leasing}</th>
              <th>{headers.kjope}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(x => (
              <tr key={x._key}>
                <td>{x.desc}</td>
                <td>{x.imove}</td>
                <td>{x.leasing}</td>
                <td>{x.kjope}</td>
              </tr>
            ))}
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
