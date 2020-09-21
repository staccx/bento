import { useMachine } from "@xstate/react"
import { createMachine } from "./useApiRequest.machine"
import { states } from "./useApiRequest.constants"

/**
 * api request with states
 * All Hooks are imported via hooks. to use a spesific hook you would
 * use hooks.useApiRequest
 */
const useApiRequest = (requestFunction, options = {}) => {
  const machine = createMachine(requestFunction)
  const [state, send, service] = useMachine(machine)

  return {
    submit: () => send("REQUEST"),
    retry: () => send("RETRY"),
    stateInstance: state,
    service,
    state: state.value,
    result: state.context.result,
    error: state.context.errorMessage
  }
}

useApiRequest.states = states

export { useApiRequest }
