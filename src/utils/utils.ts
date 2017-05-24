import {AxiosResponse} from 'axios'
import * as moment from 'moment'

export function calculateLatency(resTime: Date, reqTime: Date): number {
  const req = moment(reqTime)
  const res = moment(resTime)

  return moment.duration(res.diff(req)).asMilliseconds()
}
