import * as rp from 'request-promise'

export async function getRequest(address: any) {
  return await rp(address)
}
