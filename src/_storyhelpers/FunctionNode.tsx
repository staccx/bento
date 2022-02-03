import React, { CSSProperties, FC, memo } from "react"
// @ts-ignore
import styles from "./nodes.module.css"
import { Handle, NodeProps, Position } from "react-flow-renderer"

const targetHandleStyle: CSSProperties = {
  background: "#555",
  position: "relative",
  left: 0,
  top: 0,
  transform: ""
}

const FunctionNode: FC<NodeProps> = ({ data, isConnectable }) => {
  console.log(data)
  return (
    <div className={`${styles.node} ${styles.functionNode}`}>
      <div className={[styles.handles, styles.handlesTop].join(" ")}>
        {data.inputs.map((input, index) => {
          return (
            <Handle
              key={input.key}
              type="target"
              position={Position.Top}
              id={"target-" + input.key}
              style={targetHandleStyle}
              isConnectable={false}
            />
          )
        })}
      </div>
      <p className={styles.name}>{`${data.label}(${data.inputs
        .map(val => val.key)
        .join(",")})`}</p>
      <div className={[styles.handles, styles.handlesBottom].join(" ")}>
        <Handle
          type="source"
          position={Position.Bottom}
          id={"function-out"}
          style={targetHandleStyle}
          isConnectable={false}
        />
      </div>
    </div>
  )
}

export default memo(FunctionNode)
