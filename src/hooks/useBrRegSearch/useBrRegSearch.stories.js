import React from "react"
import ReactJson from "react-json-view"
import { storiesOf } from "@storybook/react"
import { text, withKnobs } from "@storybook/addon-knobs"
import List from "../../components/Lists/List"
import useBrRegSearch from "./useBrRegSearch"
import docs from "./useBrRegSearch.md"

const Component = ({ term }) => {
  const { isLoading, results } = useBrRegSearch(term)

  return (
    <div>
      <List>
        {isLoading
          ? "Loading..."
          : results.map(item => (
              <ReactJson
                key={item}
                src={item}
                name={`${item}`}
                theme="monokai"
                collapsed
              />
            ))}
      </List>
    </div>
  )
}

storiesOf("hooks|base/useBrRegSearch", module)
  .addDecorator(withKnobs)
  .add(
    "Dynamic input",
    () => {
      const value = text("input", "", "controls")
      return <Component term={value} />
    },
    {
      info: {
        text: docs
      }
    }
  )
