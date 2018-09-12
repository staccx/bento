import React from "react"
import {
  Layout,
  Wrapper,
  Heading,
  Button,
  RadioPill,
  RadioPillItem,
  Legend
} from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"
import Back from "../../components/Back"

const handleRadioPillChange = value => {
  console.log("You selected " + value)
}

const Due = ({ history }) => {
  const myList = [
    {
      myUniqueId: "221e98j",
      value: 5,
      label: "5.",
      defaultChecked: true
    },
    {
      myUniqueId: "ads31",
      value: 15,
      label: "15.",
      defaultChecked: false
    },
    {
      myUniqueId: "h14",
      value: 25,
      label: "25.",
      defaultChecked: false
    }
  ]
  return (
    <Wrapper variant="bib">
      <Layout>
        <div>
          <Back history={history} path="/account/34551524578" />
          <Heading level="2">Forfallsdato</Heading>
        </div>
        <div>
          <Legend>Hvilken dag vil du ha forfall hver måned?</Legend>
          <RadioPill
            onChange={handleRadioPillChange}
            group={"radiopills"}
            id="radiopills"
          >
            {myList.map(listItem => (
              <RadioPillItem
                key={listItem.myUniqueId}
                value={listItem.value}
                defaultChecked={listItem.defaultChecked}
                id={listItem.myUniqueId}
              >
                {listItem.label}
              </RadioPillItem>
            ))}
          </RadioPill>
        </div>
        <div>
          <Button
            onClick={() =>
              history.push({
                pathname: "/account/34551524578",
                state: backwards
              })
            }
          >
            Lagre
          </Button>
        </div>
      </Layout>
    </Wrapper>
  )
}

export default Due
