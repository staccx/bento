import React, { useState } from "react"
import useSearch from "./useSearch"
import Input from "../../components/Forms/Input/Input"
import List from "../../components/Lists/List"
import ReactJson from "react-json-view"
import Heading from "../../components/Text/Heading/Heading"
import { data } from "./useSearch.storyData"

export default {
  title: "new/useSearch",
  component: useSearch
}

export const useSearchView = args => {
  const defaultKeysValue = ["name.first", "company", "email"]
  const [term, setTerm] = useState("")
  const [result] = useSearch({
    input: term,
    documents: data,
    keys: defaultKeysValue
  })
  return (
    <div>
      <Input
        onChange={e => setTerm(e.target.value)}
        style={{ width: 200 }}
        placeholder="Search..."
      />
      {result && (
        <div>
          <Heading level={3}>Result</Heading>
          <List>
            {result.map((item, index) => (
              <ReactJson
                key={item + index}
                src={item}
                name={`${item.name.first} ${item.name.last}`}
                theme="monokai"
                collapsed
              />
            ))}
          </List>
          <Heading level={3}>All items</Heading>
          <List>
            {data.map((item, index) => (
              <ReactJson
                key={item + index}
                src={item}
                name={`${item.name.first} ${item.name.last}`}
                theme="monokai"
                collapsed
              />
            ))}
          </List>
        </div>
      )}
    </div>
  )
}
