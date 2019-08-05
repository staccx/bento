import React from "react"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import List from "../../Lists/List"

export const serializers = {
  list: props => (
    <Wrapper size="small">
      <List>{props.children}</List>
    </Wrapper>
  )
}
