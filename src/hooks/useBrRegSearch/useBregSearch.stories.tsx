import React, { useState } from "react";
import useBrRegSearch from "./useBrRegSearch";
import ReactJson from "react-json-view";

export default {
  title: "Hooks/useBrRegSearch",
  component: useBrRegSearch
};

export const UseBrRegSearchView = () => {
  const [search, setSearch] = useState("");
  const { isLoading, results } = useBrRegSearch(search);
  return (
    <div>
      <p>docs her</p>
      <input
        onChange={e => setSearch(e.target.value)}
        placeholder="Search here"
        style={{ width: 300 }}
      />
      <li>
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
      </li>
    </div>
  );
};
