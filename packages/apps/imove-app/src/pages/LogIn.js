import React from "react"
import { Layout, Button, EmailInput, Input, Wrapper } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"

const LogIn = ({ history }) => {
  const labelWidth = 90
  return (
    <Wrapper size="small">
      <Layout variant="verticalAlign">
        <Layout>
          <ThemeComponent tagName="logo" />
          <EmailInput label="Epostadresse" labelWidth={labelWidth} />
          <Input label="Passord" labelWidth={labelWidth} />
          <div>
            <Button
              onClick={() =>
                history.push({
                  pathname: "/app/my-car"
                })
              }
              variant="mainNavigation"
            >
              Login {/* TODO: Sanitytext */}
            </Button>
            <Button
              onClick={() =>
                history.push({
                  pathname: "/app/onboarding"
                })
              }
              variant="mainNavigation"
            >
              Bli kunde {/* TODO: Sanitytext */}
            </Button>
          </div>
        </Layout>
      </Layout>
    </Wrapper>
  )
}

export default LogIn
