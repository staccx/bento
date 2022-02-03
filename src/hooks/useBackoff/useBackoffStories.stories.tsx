import React, { useEffect, useState } from "react"
import { BackoffStrategy, useBackoff } from "./useBackoff"
import ReactJson from "react-json-view"

export default {
  title: "Hooks/useBackoff",
  component: useBackoff,
  parameters: {
    docs: {
      description: {
        component: `use this hooks to allow for back off.
          Use if you want to exponentially try to update somedata \n
          import { useBackoff } from "@staccx/bento"
          ...
          const { result, state, error, retries, nextRetry, reset } = useBackoff(() => fetchAListOfDataOrSomething(), {
            time: 1000,
            maxTime: 10000, // max time between retries,
            strategy: BackoffStrategy.Exponential, // default,
            depth: 5, // number of retries
          )}`
      }
    }
  }
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

const helperFunction = shouldFail =>
  new Promise(async (resolve, reject) => {
    await wait(500) // wait a litte
    if (shouldFail) {
      return reject()
    }
    return resolve("Your data")
  })

const Template = args => {
  const [fail, failSet] = useState(true) // faking the promise to fail
  useEffect(() => {
    const timeout = setTimeout(() => {
      failSet(false)
    }, args.timeBeforeSuccess)

    return () => clearTimeout(timeout)
  }, [args.timeBeforeSuccess, fail])

  const { result, state, error, retries, reset, nextRetry } = useBackoff(
    () => helperFunction(fail),
    args
  )

  return (
    <div>
      <div>
        <ReactJson src={args} name={"input"} />
      </div>
      <div>
        <ReactJson
          src={{
            result,
            state,
            error,
            retries,
            nextRetry
          }}
          name={"output"}
        />
      </div>
      <button
        onClick={() => {
          failSet(true)
          reset()
        }}
      >
        Reset
      </button>
    </div>
  )
}

export const UseBackoffSuccess = Template.bind({})
UseBackoffSuccess.args = {
  timeBeforeSuccess: 10000,
  time: 1000,
  maxTime: 5000,
  depth: 5,
  strategy: BackoffStrategy.Exponential
}

export const UseBackoffFailed = Template.bind({})
UseBackoffFailed.args = {
  timeBeforeSuccess: 100000,
  time: 100,
  maxTime: 1000,
  depth: 7,
  strategy: BackoffStrategy.Exponential
}

export const UseBackoffLinear = Template.bind({})
UseBackoffLinear.args = {
  timeBeforeSuccess: 100000,
  time: 1000,
  maxTime: 7000,
  depth: 7,
  strategy: BackoffStrategy.Linear
}

export const UseBackoffFixed = Template.bind({})
UseBackoffFixed.args = {
  timeBeforeSuccess: 5000,
  time: 100,
  maxTime: 100,
  depth: 7,
  strategy: BackoffStrategy.Fixed
}
