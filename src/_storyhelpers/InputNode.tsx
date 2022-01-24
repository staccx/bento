import React, { memo, FC, CSSProperties, useCallback } from "react"
import ReactJson from "react-json-view"
// @ts-ignore
import styles from "./nodes.module.css"
import { Handle, Position, NodeProps } from "react-flow-renderer"

const targetHandleStyle: CSSProperties = { background: "#555" }
const sourceHandleStyleB: CSSProperties = {
  ...targetHandleStyle,
  bottom: -5,
  top: "auto"
}

const InputNode: FC<NodeProps> = ({ data, isConnectable }) => {
  const handleRender = useCallback(() => {
    console.log("changed")
    if (typeof data.value === "object") {
      if (data.value instanceof Date) {
        return <p className={styles.clampWidth}>{data.value.toString()}</p>
      }
      return (
        <div className={styles.alignLeft}>
          <ReactJson
            collapsed
            theme={"hopscotch"}
            src={data.value}
            name={data.label}
          />
        </div>
      )
    }
    return <p className={styles.value}>{data.value}</p>
  }, [data.value])

  return (
    <div className={`${styles.node} ${styles.inputNode}`}>
      <p className={styles.name}>{data.label}</p>

      {handleRender()}

      <Handle
        type="source"
        position={Position.Bottom}
        id={data.name}
        style={sourceHandleStyleB}
        isConnectable={false}
      />
    </div>
  )
}

export default memo(InputNode)
