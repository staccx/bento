import React from "react"
import ReactJson from "react-json-view"
import { storiesOf } from "@storybook/react"
import { array, text, withKnobs } from "@storybook/addon-knobs"
import List from "../../components/Lists/List"
import useSearch from "./useSearch"
import docs from "./useSearch.md"
import { data } from "./useSearch.storyData.json"
import Heading from "../../components/Text/Heading/Heading"

const keysLabel = "Keys"
const defaultKeysValue = ["name.first", "company", "email"]

const Component = ({ term, keys = defaultKeysValue }) => {
  const [result] = useSearch({ input: term, documents: data, keys })

  return (
    <div>
      <List>
        {result.map(item => (
          <ReactJson
            src={item}
            name={`${item.name.first} ${item.name.last}`}
            theme={"monokai"}
            collapsed
          />
        ))}
      </List>

      <Heading>All items</Heading>

      <List>
        {data.map(item => (
          <ReactJson
            src={item}
            name={`${item.name.first} ${item.name.last}`}
            theme={"monokai"}
            collapsed
          />
        ))}
      </List>
    </div>
  )
}

storiesOf("hooks|base/useSearch", module)
  .addDecorator(withKnobs)
  .add(
    "Fixed prop input",
    () => {
      return <Component term={"Blake"} />
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Dynamic input",
    () => {
      const value = text("input", "", "1")
      return <Component term={value} />
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Dynamic keys and input",
    () => {
      const value = text("input", "", "1")
      const keys = array(keysLabel, defaultKeysValue)
      return <Component term={value} keys={keys} />
    },
    {
      info: {
        text: docs
      }
    }
  )
