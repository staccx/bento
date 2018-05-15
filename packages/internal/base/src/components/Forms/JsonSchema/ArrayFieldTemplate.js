import React from "react"
import Button from "../../Button/Button"
import Label from "../Label/Label"

const ArrayFieldTemplate = props => {
  return (
    <div className={props.className}>
      <Label>{props.title}</Label>
      {props.canAdd && (
        <div className="row">
          <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
            <Button onClick={props.onAddClick} type="button">
              Custom +
            </Button>
          </p>
        </div>
      )}
      {props.items &&
        props.items.map(element => (
          <div key={element.index}>
            <div>{element.children}</div>
            {element.hasMoveDown && (
              <Button
                onClick={element.onReorderClick(
                  element.index,
                  element.index + 1
                )}
              >
                Down
              </Button>
            )}
            {element.hasMoveUp && (
              <Button
                onClick={element.onReorderClick(
                  element.index,
                  element.index - 1
                )}
              >
                Up
              </Button>
            )}
            <Button onClick={element.onDropIndexClick(element.index)}>
              Delete
            </Button>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default ArrayFieldTemplate
