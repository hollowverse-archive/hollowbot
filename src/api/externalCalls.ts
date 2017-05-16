import * as rp from 'request-promise'

export function getRequest(address: rp.Options) {
  try {
    return rp(address)
  } catch (error) {
    throw error
  }
}
