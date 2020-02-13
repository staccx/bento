import useBrRegSearch from "./useBrRegSearch"
import List from "../../components/Lists/List"
import ReactJson from "react-json-view"
import React from "react"

export const Component = ({ term }) => {
  const { isLoading, results } = useBrRegSearch(term)

  return (
    <div>
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
