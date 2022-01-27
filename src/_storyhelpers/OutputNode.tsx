import React, { memo, FC, CSSProperties } from "react"
// @ts-ignore
import styles from "./nodes.module.css"
import { Handle, Position, NodeProps } from "react-flow-renderer"

const targetHandleStyle: CSSProperties = { background: "#555" }
const sourceHandleStyleB: CSSProperties = {
  ...targetHandleStyle,
  top: -5
}

const OutputNode: FC<NodeProps> = ({ data, isConnectable }) => {
  return (
    <div className={`${styles.node} ${styles.outputNode}`}>
      <Handle
        type="target"
        position={Position.Bottom}
        id={data.name}
        style={sourceHandleStyleB}
        isConnectable={false}
      />
      <p className={styles.value}>{data.value}</p>
    </div>
  )
}

export default memo(OutputNode)
