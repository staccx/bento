import React from "react"
import styled from "styled-components"
import Loading from "../../DataViz/Loading/Loading"

const FullScreenLoader = () => {
  return <FullScreenDiv>{<Loading />}</FullScreenDiv>
}

const FullScreenDiv = styled.div``

export default FullScreenLoader
