/* eslint-disable import/no-anonymous-default-export */
import { useMutationObserver } from "./useMutationObserver"
import React, { useRef, useState } from "react"
import ReactJson from "react-json-view"

export default {
  title: "hooks/useMutationObserver"
}

export const MoveBox = () => {
  // could also be globals like `document`
  const myRef = useRef()

  const [xPos, xPosSet] = useState(0)

  const value = useMutationObserver(myRef, {
    subtree: true,
    childList: true,
    attributes: true
  })
  console.log(value)

  return (
    <div ref={myRef}>
      <div>
        <div>
          <div data-x={xPos} />
        </div>
      </div>
      <div>
        <button onClick={() => xPosSet(prevState => prevState - 10)}>
          Left
        </button>
        <button onClick={() => xPosSet(prevState => prevState + 10)}>
          Right
        </button>
      </div>
      <div>
        Changes
        {value &&
          value.map(record => (
            <ReactJson
              key={"mutationx" + record.attributeName}
              src={{
                attributeName: record.attributeName
              }}
              theme="monokai"
            />
          ))}
      </div>
    </div>
  )
}
