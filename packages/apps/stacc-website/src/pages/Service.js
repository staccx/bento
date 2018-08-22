import React from "react"
import { Layout } from "@staccx/base"
import PageHead from "../components/PageHead/PageHead"
import FeatureList from "../components/FeatureList/FeatureList"

const Service = () => (
  <div>
    <Layout paddingTop="grid" rowGap="grid">
      <PageHead
        heading="Core banking infrastructure"
        lede="Stacc Core provides highly automated and flexible administration of credit and savings accounts. Run your financial services company efficiently on a modern platform that promotes innovation and business agility."
        illustration="/img/core.png"
      />
      <FeatureList />
    </Layout>
  </div>
)

export default Service
