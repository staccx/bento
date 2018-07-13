import React from "react"
import Logo from "./Logo"
import Wrapper from "../Layout/Wrapper/Wrapper"
import Button from "../Button/Button"
import Input from "../Forms/Input/Input"

const preview = {
  title: "Logo",
  category: "Components/Dataviz",
  component: Logo,
  render: props => (
    <React.Fragment>
      <Logo
        brand={"kiwi"}
        token={
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUxODg2MDE1MDc0MDAwNDNjZDRlZTYiLCJlbWFpbCI6ImluZm9AZmluYW5jZWlubm92YXRpb24ubm8iLCJyb2xlIjoidXNlciIsImlhdCI6MTUyODcwMjIyNCwiZXhwIjoxNTM3MzQyMjI0LCJhdWQiOiJTdGFjY1g6Q2xpZW50cyIsImlzcyI6IlN0YWNjOlN0YWNjWCJ9.qrlm-hpNK8nYdBpNGswdX0uRlzpsH4Okv6VbwmReeOQ"
        }
        renderFallback={() => (
          <img
            src={"http://fillmurray.com/100/100"}
            alt={`${props.brand || "Bill Murray"}`}
          />
        )}
        {...props}
      />
    </React.Fragment>
  ),
  renderExampleController: ({ setComponentState, search }) => (
    <Wrapper>
      <Input
        id={"logoSearch"}
        onChange={e => setComponentState({ search: e.target.value })}
      />
      <Button onClick={() => setComponentState({ brand: search })}>
        Search
      </Button>
    </Wrapper>
  )
}

export default preview
