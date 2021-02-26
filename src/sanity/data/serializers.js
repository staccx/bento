import React from "react"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import List from "../../Lists/List"

const ListWrapper = props => (
  <Wrapper size="small">
    <List>{props.children}</List>
  </Wrapper>
)

ListWrapper.displayName = "List wrapper in serializer"

export const serializers = {
  list: ListWrapper
}
