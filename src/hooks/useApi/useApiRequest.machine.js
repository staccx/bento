import { assign, Machine as machine } from "xstate"
import { states } from "./useApiRequest.constants"

export const createMachine = requestFunction =>
  machine({
    id: "requestStateMachone",
    initial: "idle",
    context: {
      retries: 0
    },
    states: {
      idle: {
        on: {
          REQUEST: states.REQUESTING
        }
      },
      requesting: {
        invoke: {
          id: "request",
          src: requestFunction,
          onDone: {
            target: states.SUCCESS,
            actions: assign({
              result: (context, event) => event.data.result,
              statusCode: (context, event) => event.data.code
            })
          },
          onError: {
            target: states.ERROR,
            actions: assign({
              result: null,
              statusCode: (context, event) => event.data.code,
              errorMessage: (context, event) => {
                return event.data.message
              }
            })
          }
        },
        on: {
          RESOLVE: states.SUCCESS,
          REJECT: states.ERROR
        }
      },
      success: {
        on: {
          RETRY: {
            target: states.REQUESTING,
            actions: assign({
              result: null,
              retries: context => context.retries + 1
            })
          }
        }
      },
      error: {
        on: {
          RETRY: {
            target: states.REQUESTING,
            actions: assign({
              retries: (context, event) => context.retries + 1
            })
          }
        }
      }
    }
  })
