import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Wrapper } from "@staccx/base"
import SectionHeading from "../SectionHeading/SectionHeading"

const Comparison = ({ data }) => (
  <Content>
    <Wrapper size="largePlus">
      <SectionHeading>{data.heading}</SectionHeading>
      <div>
        <table>
          <thead>
            <tr>
              <th>{data.headers.desc}</th>
              <th>{data.headers.imove}</th>
              <th>{data.headers.leasing}</th>
              <th>{data.headers.kjope}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map(x => (
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
  padding: ${spacing.huge} ${spacing("largePlus")};
`

export default Comparison
