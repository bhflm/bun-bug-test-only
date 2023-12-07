import {describe, expect, test} from 'bun:test';

describe('', () => {
  test('First test', () => {
    const foo = ["foo", "bar"];
    expect(foo.length).toBe(2);
  });
  test('Second test', () => {
    const foo = ["bar"];
    expect(foo.length).toBe(1);
  });
  test('Third test"', () => {
    const foo = ["foo"];
    expect(foo.length).toBe(1);
  });
});