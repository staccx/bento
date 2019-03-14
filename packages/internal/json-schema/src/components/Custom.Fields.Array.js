import React from "react"
import { Button, Layout, Box } from "@staccx/base"

// const CaretIcon = styled(Caret)`
//   transition: transform 0.3s ease-out;
//   transform: ${p => (p.rotate ? "rotate(180deg)" : "rotate(0)")};
// `

// const IconButton = ({ icon, ...rest }) => (
//   <Button {...rest}>
//     <CaretIcon rotate={icon === "arrow-up"} />
//   </Button>
// )

export const AddButton = props => <Button {...props} />

export const RemoveButton = props => <AddButton children="-" {...props} />
const ArrayFieldTitle = ({ TitleField, idSchema, title, required, help }) => {
  if (!title) {
    return null
  }
  const id = `${idSchema.$id}__title`
  // return <Heading level={4}>{title}</Heading>
  return (
    <TitleField
      level={4}
      id={id}
      title={title}
      required={required}
      help={help}
    />
  )
}

const ArrayFieldDescription = ({ DescriptionField, idSchema, description }) => {
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />
  }
  const id = `${idSchema.$id}__description`
  return <DescriptionField id={id} description={description} />
}

const defaultArrayItem = props => {
  return (
    <Box variant={["inlineBox"]} key={props.index}>
      {props.children}

      {props.hasToolbar && props.hasRemove && (
        <RemoveButton
          variant={["round", "negative"]}
          tabIndex="-1"
          disabled={props.disabled || props.readonly}
          onClick={props.onDropIndexClick(props.index)}
        />
      )}
    </Box>
  )
}

export default props => {
  const title = props.label || props.schema.title || props.uiSchema["ui:title"]
  return (
    <Layout>
      {title && (
        <Box variant={["inlineBox"]}>
          <ArrayFieldTitle
            key={`array-field-title-${props.idSchema.$id}`}
            TitleField={props.TitleField}
            idSchema={props.idSchema}
            title={title}
            required={props.required}
            help={props.help}
          />
        </Box>
      )}
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
          variant={["positive"]}
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        >
          {`${props.uiSchema["ui:add-label"] || "+"}`}
        </AddButton>
      )}
    </Layout>
  )
}
