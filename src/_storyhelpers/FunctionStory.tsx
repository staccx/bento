import React from "react"
import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  MarkerType,
  Node,
  ReactFlowProvider
} from "react-flow-renderer"
import InputNode from "./InputNode"
import FunctionNode from "./FunctionNode"
import OutputNode from "./OutputNode"

type FunctionStoryProps = {
  name: string
  input: Record<string, any>
  output: string | number | boolean | Record<string, any> | undefined
}

const nodeTypes = {
  inputNode: InputNode,
  functionNode: FunctionNode,
  outputNode: OutputNode
}

type FunctionStoryState = {
  nodes: Node[]
  edges: Edge[]
}

function FunctionStory(props: FunctionStoryProps) {
  const inputMap = Object.keys(props.input)

  const functionNode = {
    id: "function",
    type: "functionNode",
    data: {
      label: props.name,
      inputs: inputMap.map((key, index) => ({
        key,
        value: props.input[key]
      }))
    },
    position: { x: 0, y: inputMap.length === 1 ? 100 : 200 },
    className: "light",
    draggable: false
  }

  const itemWidth = 100
  const nodeWidth = 250
  const elements = inputMap.reduce(
    (previousValue: FunctionStoryState, key, index, array) => {
      const value = props.input[key]
      const id = `input-${index}`
      const x =
        array.length === 1
          ? 0
          : -itemWidth / 2 + itemWidth / 2 + index * nodeWidth - nodeWidth / 2

      previousValue.nodes.push({
        id,
        type: "inputNode",
        data: { label: key, value, id },
        position: { x: x, y: 0 },
        className: "light",
        draggable: false
      })

      const target = "target-" + key
      previousValue.edges.push({
        id: `${id}-to-function`,
        source: id,
        target: "function",
        targetHandle: target,
        animated: true,
        markerEnd: {
          type: MarkerType.ArrowClosed
        }
      })

      return previousValue
    },
    {
      nodes: [functionNode],
      edges: []
    }
  )

  switch (typeof props.output) {
    case "string": {
      elements.nodes.push({
        id: "output",
        type: "outputNode",
        data: { label: "Output", value: props.output },
        position: { x: 0, y: inputMap.length === 1 ? 200 : 300 },
        className: "light",
        draggable: false
      })
      elements.edges.push({
        id: `function-to-output`,
        source: "function",
        target: "output",
        animated: true,
        markerEnd: {
          type: MarkerType.Arrow
        }
      })
      break
    }
    default:
      elements.nodes.push({
        id: "output",
        type: "outputNode",
        data: {
          label: "Unkown output type",
          value: "Not yet supported" + typeof props.output
        },
        position: { x: 0, y: inputMap.length === 1 ? 200 : 300 },
        className: "light",
        draggable: false
      })
      elements.edges.push({
        id: `function-to-output`,
        source: "function",
        target: "output",
        animated: true,
        markerEnd: {
          type: MarkerType.Arrow
        }
      })
  }

  console.log(elements)

  return (
    <div
      style={{
        height: "100vh"
      }}
    >
      <ReactFlow
        defaultNodes={elements.nodes}
        defaultEdges={elements.edges}
        className="react-flow-basic-example"
        defaultZoom={1.5}
        nodeTypes={nodeTypes}
        minZoom={0.2}
        maxZoom={4}
        fitViewOnInit
      >
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  )
}

function FunctionStoryWrapper(props: FunctionStoryProps) {
  return (
    <ReactFlowProvider>
      <FunctionStory {...props} />
    </ReactFlowProvider>
  )
}

export default FunctionStoryWrapper
