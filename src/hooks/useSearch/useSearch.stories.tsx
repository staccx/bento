import React, { useState } from "react"
import useSearch from "./useSearch"
import ReactJson from "react-json-view"
import { data } from "./useSearch.storyData"

export default {
  title: "Hooks/useSearch",
  component: useSearch
}

export const SearchView = args => {
  const defaultKeysValue = ["name.first", "company", "email"]
  const [term, setTerm] = useState("")
  const [result] = useSearch({
    input: term,
    documents: data,
    keys: defaultKeysValue
  })
  return (
    <div>
      <input
        onChange={e => setTerm(e.target.value)}
        style={{ width: 200 }}
        placeholder="Search..."
      />
      {result && (
        <div>
          <h3>Result</h3>
          <ul>
            {result.map((item, index) => (
              <li>
                <ReactJson
                  key={item + index}
                  src={item}
                  name={`${item.name.first} ${item.name.last}`}
                  theme="monokai"
                  collapsed
                />
              </li>
            ))}
          </ul>
          <h3>All items</h3>
          <ul>
            {data.map((item, index) => (
              <li>
                <ReactJson
                  key={item + index}
                  src={item}
                  name={`${item.name.first} ${item.name.last}`}
                  theme="monokai"
                  collapsed
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
