import { expect, test, vi } from 'vitest'

import { quote, boolean } from './index'

vi.mock('sample')
vi.mock('undici')

test('should use a mocked implementation of undici', async () => {
  expect(await quote()).toEqual({
    quote: "Life is what happens to you while you're busy making other plans.",
    author: 'John Lennon',
  })
})

test('should use a mocked implementation of sample', () => {
  expect(boolean()).toBe(false)
})
