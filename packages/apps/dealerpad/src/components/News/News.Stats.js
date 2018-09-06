import React from "react"
import { Box, Wrapper, Layout, LayoutItem } from "@staccx/base"
import HackStatus from "./Hack/Hack.Status"
import HackMonthlySale from "./Hack/Hack.MonthlySale"
import HackTotalSale from "./Hack/Hack.TotalSale"
import Contact from "../Contact"

const NewsStats = ({ article }) => (
  <Box variant="defaultHero" size="flush">
    <Wrapper>
      <Layout variant="stats">
        <LayoutItem variant="statsSelect">Dine saker</LayoutItem>
        <LayoutItem variant="statsStatus">
          <Box variant="subtle">
            <HackStatus />
          </Box>
        </LayoutItem>
        <LayoutItem variant="statsMonth">
          <HackMonthlySale />
        </LayoutItem>
        <LayoutItem variant="statsTotal">
          <HackTotalSale />
        </LayoutItem>
        <LayoutItem variant="statsContact">
          <Contact />
        </LayoutItem>
      </Layout>
    </Wrapper>
  </Box>
)

export default NewsStats
