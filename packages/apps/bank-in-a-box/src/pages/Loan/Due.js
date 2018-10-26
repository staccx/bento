import React from "react"
import {
  Layout,
  Wrapper,
  Heading,
  Button,
  RadioPill,
  RadioPillItem,
  Legend,
  LayoutItem
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
        <LayoutItem variant="fadeIn" delay="200">
          <Back history={history} path="/loan/34551524578" />
          <Heading level="2">Forfallsdato</Heading>
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="400">
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
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600">
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
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default Due
