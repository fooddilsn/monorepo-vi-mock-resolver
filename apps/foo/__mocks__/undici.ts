import { Mock, vi } from 'vitest'

export const request: Mock = vi.fn().mockImplementation(() => ({
  body: {
    json: vi.fn().mockImplementation(() => {
      console.log('undici: mocked implementation')
      return {
        id: 12,
        quote:
          "Life is what happens to you while you're busy making other plans.",
        author: 'John Lennon',
      }
    }),
  },
}))
