import React from "react"
import { useApiRequest } from "./useApiRequest"
import Button from "../../components/Button/Button"
import Loading from "../../components/Loaders/Loading/Loading"

export default {
  title: "Hooks/useApiRequest",
  component: useApiRequest
}

const wait = (response, delay = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(response), delay))

const waitError = (response, delay = 1000) =>
  new Promise((resolve, reject) => setTimeout(() => reject(response), delay))

export const useApiRequestSuccess = args => {
  const { state, error, result, submit, retry } = useApiRequest(() =>
    wait({ result: "somedata", code: 200 })
  )
  return (
    <div>
      <div>State: {state}</div>
      {state === useApiRequest.states.IDLE && (
        <Button onClick={submit}>Submit</Button>
      )}
      {state === useApiRequest.states.REQUESTING && <Loading idleTime={0} />}
      {state === useApiRequest.states.SUCCESS && (
        <span>Result was {result}</span>
      )}
      {state === useApiRequest.states.SUCCESS && (
        <Button onClick={retry}>Retry</Button>
      )}
      {state === useApiRequest.states.ERROR && <span>Error is {error}</span>}
    </div>
  )
}

export const useApiRequestFail = args => {
  const e = new Error("Some error from axios")
  e.code = 502
  const { state, error, submit, retry } = useApiRequest(() => waitError(e))

  return (
    <div>
      <div>State: {state}</div>
      {state === useApiRequest.states.IDLE && (
        <Button onClick={submit}>Submit</Button>
      )}
      {state === useApiRequest.states.REQUESTING && <Loading idleTime={0} />}
      {state === useApiRequest.states.ERROR && (
        <Button onClick={retry}>Retry</Button>
      )}
      {state === useApiRequest.states.ERROR && <span>Error is {error}</span>}
    </div>
  )
}
