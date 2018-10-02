import React from "react"
import Fetch from "./Fetch"
import Input from "../Forms/Input/Input"
import Button from "../Button/Button"
import CodeRenderer from "../Code/CodeRenderer"
import Wrapper from "../Layout/Wrapper/Wrapper"
import Paragraph from "../Text/Paragraph/Paragraph"

const preview = {
  title: "Fetch",
  category: "Components/Render Utilities",
  tags: ["renderProps", "utility"],
  component: Fetch,
  render: ({ url = "https://httpbin.org/get", ...props }) => (
    <Fetch url={url} mapData={item => item.json()} {...props}>
      {({ data }) => (
        <div>
          <Paragraph>{`Url: ${url}`}</Paragraph>
          Resultat: 👇
          <CodeRenderer language="javascript" code={JSON.stringify(data)} />
        </div>
      )}
    </Fetch>
  ),
  renderExampleController: ({ setComponentState, urlTemp }) => (
    <Wrapper>
      <Input
        label={"Url"}
        onChange={e => setComponentState({ urlTemp: e.target.value })}
      />
      <Button onClick={() => setComponentState({ url: urlTemp })}>
        Set url
      </Button>
    </Wrapper>
  )
}

export default preview
