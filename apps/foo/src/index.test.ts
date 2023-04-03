import { expect, test, vi } from 'vitest';

import { app } from './index';

vi.mock('sample');

test('should use a mocked dependency', () => {
  expect(app()).toBe(false);
});