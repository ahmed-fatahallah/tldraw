import { TLPerformanceMode } from '@tldraw/core'
import type { Action } from 'state/constants'

export const setTransformPerformanceMode: Action = (data) => {
  data.performanceMode = TLPerformanceMode.TransformSelected
}