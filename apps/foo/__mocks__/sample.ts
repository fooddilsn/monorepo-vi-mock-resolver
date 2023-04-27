import { Mock, vi } from 'vitest'

export const main: Mock = vi.fn().mockImplementation(() => {
  console.log('sample: fake implementation')
  return false
})
