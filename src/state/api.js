import accounts from '../data/accounts'
import invoices from '../data/invoices'
import payments from '../data/payments'
import transactions from '../data/transactions'
import customer from '../data/customer'
import annualStatements from '../data/annualStatements'
// import axios from "axios"
// const axiosInstance = axios.create({
//   baseURL: "/api"
// })
// const cancelSource = axios.CancelToken.source()
// const getConfig = (user?token?) => {
//   headers: Bearer something
// }
const delay = 200

export const getAccount = () => {
  // return axiosInstance.get(`/accounts`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(accounts), delay)
  })
}

export const getAccount = accountId => {
  // return axiosInstance.get(`/accounts/${accountId}`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(accounts[accountId]), delay)
  })
}

export const getInvoices = accountId => {
  // return axiosInstance.get(`/accounts/${accountId}/invoices`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(invoices[accountId]), delay)
  })
}

export const getPayments = accountId => {
  // return axiosInstance.get(`/accounts/${accountId}/payments`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(payments[accountId]), delay)
  })
}

export const getTransactions = accountId => {
  // return axiosInstance.get(`/accounts/${accountId}/transactions`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(transactions[accountId]), delay)
  })
}

export const getCustomer = () => {
  // return axiosInstance.get(`/customer`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(customer), delay)
  })
}

export const setCustomer = data => {
  // return axiosInstance.post(`/customer`, data, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(data), delay)
  })
}

export const getAnnualStatements = () => {
  // return axiosInstance.get(`/annual-statements`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(annualStatements), delay)
  })
}

export const getCustomerContext = () => {
  // return axiosInstance.get(`/annual-statements`, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(customerContext), delay)
  })
}

export const completeSigning = ({flowId, requestId}) => {
  const data = {
    flowId,
    requestId
  }
  // return axiosInstance.post(`/complete-signing`, data, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(data), delay)
  })
}

export const transfer = ({targetAccount, accountId, amount, nonce, birthNumber}) => {
  const data = {
    targetAccount,
    accountId,
    amount,
    nonce,
    birthNumber
  }
  // return axiosInstance.post(`/transfer}`, data, getConfig())
  //   .then(result => result.data)
  return new Promise(resolve => {
    setTimeout(() => resolve(data), delay)
  })
}
