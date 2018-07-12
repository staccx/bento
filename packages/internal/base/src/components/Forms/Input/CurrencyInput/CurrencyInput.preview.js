import React from "react"
import CurrencyInput from "./CurrencyInput"
import Input from "../Input"
import Layout from "../../../Layout/Layout/Layout"

const preview = {
  title: "CurrencyInput",
  category: "component/Forms/Input",
  component: CurrencyInput,
  render: props => <CurrencyInput id="rklfnj3" {...props} />,
  renderExampleController: ({
    setComponentState,
    suffix,
    prefix,
    thousandsSeparatorSymbol
  }) => (
    <Layout grid="form">
      <Input
        label="Prefix"
        id="Prefixexample"
        defaultValue={prefix}
        onChange={e => setComponentState({ prefix: e.target.value })}
      />
      <Input
        label="Suffix"
        id="suffixexample"
        defaultValue={suffix}
        onChange={e => setComponentState({ suffix: e.target.value })}
      />
      <Input
        label="Thousands Separator Symbol"
        id="thousandsSeparatorSymbol"
        defaultValue={thousandsSeparatorSymbol}
        onChange={e =>
          setComponentState({ thousandsSeparatorSymbol: e.target.value })
        }
      />
    </Layout>
  )
}

export default preview
