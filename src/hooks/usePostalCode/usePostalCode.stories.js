import React, { useState } from "react"
import { usePostalCode } from "./usePostalCode"
import Input from "../../components/Forms/Input/Input"

export default {
  title: "new/Hooks/usePostalCode",
  component: usePostalCode
}

export const Standard = args => {
  const [input, setInput] = useState("")
  const [place] = usePostalCode(input)
  console.log(place)
  return (
    <div>
      <Input onChange={e => setInput(e.target.value)} style={{ width: 100 }} />
      {place && <p>{place.result}</p>}
    </div>
  )
}
