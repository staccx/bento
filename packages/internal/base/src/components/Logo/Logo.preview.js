import React from "react"
import Logo from "./Logo"

const preview = {
  title: "Logo",
  category: "component/Dataviz",
  component: Logo,
  render: props => (
    <React.Fragment>
      <Logo
        brand={"sbanken"}
        token={
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUxODg2MDE1MDc0MDAwNDNjZDRlZTYiLCJlbWFpbCI6ImluZm9AZmluYW5jZWlubm92YXRpb24ubm8iLCJyb2xlIjoidXNlciIsImlhdCI6MTUyODcwMjIyNCwiZXhwIjoxNTM3MzQyMjI0LCJhdWQiOiJTdGFjY1g6Q2xpZW50cyIsImlzcyI6IlN0YWNjOlN0YWNjWCJ9.qrlm-hpNK8nYdBpNGswdX0uRlzpsH4Okv6VbwmReeOQ"
        }
      />
    </React.Fragment>
  )
}

export default preview
