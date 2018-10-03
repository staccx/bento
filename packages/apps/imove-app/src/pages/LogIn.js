import React from "react"
import { Layout, Button, EmailInput, Input } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"

const LogIn = ({ history }) => {
  const labelWidth = 90
  return (
    <Layout variant="verticalAlign">
      <Layout>
        <ThemeComponent tagName="logo" />
        <EmailInput label="Epostadresse" labelWidth={labelWidth} />
        <Input label="Passord" labelWidth={labelWidth} />
        <div>
          <Button
            onClick={() =>
              history.push({
                pathname: "/my-car"
              })
            }
            variant="mainNavigation"
          >
            Login {/* TODO: Sanitytext */}
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: "/onboarding"
              })
            }
            variant="mainNavigation"
          >
            Bli kunde {/* TODO: Sanitytext */}
          </Button>
        </div>
      </Layout>
    </Layout>
  )
}

export default LogIn
