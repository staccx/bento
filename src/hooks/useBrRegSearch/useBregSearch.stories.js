import React, { useState } from "react"
import useBrRegSearch from "./useBrRegSearch"
import List from "../../components/Lists/List"
import Input from "../../components/Forms/Input/Input"
import ReactJson from "react-json-view"

export default {
  title: "new/useBrRegSearch",
  component: useBrRegSearch
}

export const useBrRegSearchView = args => {
  const [search, setSearch] = useState("")
  const { isLoading, results } = useBrRegSearch(search)
  return (
    <div>
      <Input
        onChange={e => setSearch(e.target.value)}
        placeholder="Search here"
        style={{ width: 300 }}
      />
      <List>
        {isLoading
          ? "Loading..."
          : results.map(item => (
              <ReactJson
                key={item.organisasjonsnummer}
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
