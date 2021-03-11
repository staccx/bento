import React from "react"
import { Button } from "../../index"
import styled from "styled-components"
import { useWebFonts } from "./useWebfonts"

export default {
  title: "hooks/useWebFonts"
}

const Text = styled.p`
  font-family: Akaya Telivigala, SansSerif;
`

export const ChangeFont = () => {
  const { unload, load } = useWebFonts(
    {
      google: {
        families: ["Akaya Telivigala:ital,wght@0,400;0,500;1,500"]
      }
    },
    false
  )

  return (
    <div>
      <Text>This text will change</Text>
      <Button onClick={unload}>Unload font</Button>
      <Button onClick={load}>Load font</Button>
    </div>
  )
}

export const AutoLoad = () => {
  const { unload, load } = useWebFonts({
    google: {
      families: ["Akaya Telivigala:ital,wght@0,400;0,500;1,500"]
    }
  })

  return (
    <div>
      <Text>This text will change</Text>
      <Button onClick={unload}>Unload font</Button>
      <Button onClick={load}>Load font</Button>
    </div>
  )
}
