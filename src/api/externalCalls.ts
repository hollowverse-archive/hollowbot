import * as rp from 'request-promise'

export function getRequest(address: rp.Options) {
  return rp(address)
}
