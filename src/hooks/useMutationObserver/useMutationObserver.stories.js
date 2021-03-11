import { useMutationObserver } from "./useMutationObserver"
import React, { useRef, useState } from "react"
import { Button } from "../../index"
import styled from "styled-components"
import ReactJson from "react-json-view"

export default {
  title: "hooks/useMutationObserver"
}

const Box = styled.div`
  width: 64px;
  height: 64px;
  left: ${p => p.x}px;
  top: 0;
  position: absolute;
  background-color: darkslateblue;
  transform: rotate(0);

  &:hover {
    background-color: hotpink;
    transform: rotate(45);
    transition: all 1s;
  }
`

const Container = styled.div`
  position: relative;
  display: block;
  padding: 48px 0;
`

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
        <Container>
          <Box x={xPos} />
        </Container>
      </div>
      <div>
        <Button onClick={() => xPosSet(prevState => prevState - 10)}>
          Left
        </Button>
        <Button onClick={() => xPosSet(prevState => prevState + 10)}>
          Right
        </Button>
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
