import useSearch from "./useSearch"
import { data } from "./useSearch.storyData"
import List from "../../components/Lists/List"
import ReactJson from "react-json-view"
import Heading from "../../components/Text/Heading/Heading"
import React from "react"

export const defaultKeysValue = ["name.first", "company", "email"]

const Component = ({ term, keys = defaultKeysValue }) => {
  const [result] = useSearch({ input: term, documents: data, keys })

  return (
    <div>
      <List>
        {result.map(item => (
          <ReactJson
            key={item}
            src={item}
            name={`${item.name.first} ${item.name.last}`}
            theme="monokai"
            collapsed
          />
        ))}
      </List>

      <Heading>All items</Heading>

      <List>
        {data.map(item => (
          <ReactJson
            key={item}
            src={item}
            name={`${item.name.first} ${item.name.last}`}
            theme="monokai"
            collapsed
          />
        ))}
      </List>
    </div>
  )
}
export default Component
