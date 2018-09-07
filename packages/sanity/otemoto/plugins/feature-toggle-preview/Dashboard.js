import React from "react"

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from "./MyTool.css"
import FeatureToggle from "../feature-toggle/components/FeatureToggle"
import sanityClient from "part:@sanity/base/client"

const client = sanityClient.clone()
class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h1>
            Aprila
          </h1>
          <h2>
            Deposit Account
          </h2>
        <FeatureToggle
          client={"Aprila"}
          feature={"Deposit account"}
          environment={"dev"}
          sanityClient={client}
        >
          <div>Development on</div>
        </FeatureToggle>
          <FeatureToggle
            client={"Aprila"}
            feature={"Deposit account"}
            environment={"staging"}
            sanityClient={client}
          >
            <div>Staging on</div>
          </FeatureToggle>
          <FeatureToggle
            client={"Aprila"}
            feature={"Deposit account"}
            environment={"production"}
            sanityClient={client}
          >
            <div>Production on</div>
          </FeatureToggle>
        </div>
      </div>
    )
  }
}

export default Dashboard
