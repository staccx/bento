import React from "react"
import { Button, Caret, Layout, LayoutItem, Wrapper } from "@staccx/base"
import styled from "styled-components"

const CaretIcon = styled(Caret)`
  transition: transform 0.3s ease-out;
  transform: ${p => (p.rotate ? "rotate(180deg)" : "rotate(0)")};
`

const IconButton = ({ icon, ...rest }) => (
  <Button {...rest}>
    <CaretIcon rotate={icon === "arrow-up"} />
  </Button>
)

const AddButton = props => <Button {...props} />

const ArrayFieldTitle = ({ TitleField, idSchema, title, required }) => {
  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />
  }
  const id = `${idSchema.$id}__title`
  // return <Heading level={4}>{title}</Heading>
  return <TitleField level={4} id={id} title={title} required={required} />
}

const ArrayFieldDescription = ({ DescriptionField, idSchema, description }) => {
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />
  }
  const id = `${idSchema.$id}__description`
  return <DescriptionField id={id} description={description} />
}

const Custom = styled(Layout)`
  grid-auto-columns: 1fr 0.1fr;

  grid-template-areas:
    ". toolbar"
    "children children";
`

const defaultArrayItem = props => {
  return (
    <Custom variant={["_default", "arrayItem"]} key={props.index}>
      <LayoutItem area={"children"}>{props.children}</LayoutItem>

      {props.hasToolbar && (
        <LayoutItem area={"toolbar"}>
          <Wrapper>
            {(props.hasMoveUp || props.hasMoveDown) && (
              <IconButton
                icon="arrow-up"
                tabIndex="-1"
                disabled={props.disabled || props.readonly || !props.hasMoveUp}
                onClick={props.onReorderClick(props.index, props.index - 1)}
              />
            )}

            {(props.hasMoveUp || props.hasMoveDown) && (
              <IconButton
                icon="arrow-down"
                tabIndex="-1"
                disabled={
                  props.disabled || props.readonly || !props.hasMoveDown
                }
                onClick={props.onReorderClick(props.index, props.index + 1)}
              />
            )}

            {props.hasRemove && (
              <AddButton
                children="-"
                tabIndex="-1"
                disabled={props.disabled || props.readonly}
                onClick={props.onDropIndexClick(props.index)}
              />
            )}
          </Wrapper>
        </LayoutItem>
      )}
    </Custom>
  )
}

export default props => {
  return (
    <Layout>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema["ui:title"] || props.title}
        required={props.required}
      />

      {(props.uiSchema["ui:description"] || props.schema.description) && (
        <ArrayFieldDescription
          key={`array-field-description-${props.idSchema.$id}`}
          DescriptionField={props.DescriptionField}
          idSchema={props.idSchema}
          description={
            props.uiSchema["ui:description"] || props.schema.description
          }
        />
      )}

      <div key={`array-item-list-${props.idSchema.$id}`}>
        {props.items && props.items.map(defaultArrayItem)}
      </div>

      {props.canAdd && (
        <AddButton
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        >
          {`+ ${props.canAdd.title || ""}`}
        </AddButton>
      )}
    </Layout>
  )
}
