import { Mock, vi } from 'vitest';

export const main: Mock = vi.fn().mockImplementation(() => {
  console.log('Fake implementation');
  return false;
});

 