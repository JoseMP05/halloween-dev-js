// sum.test.js
import { expect, test } from 'vitest'
import { createMagicPotion } from './solution.js'

const cases = {
  case1: [[4, 5, 6, 2], 8, [2, 3]],
  case2: [[1, 2, 3, 4], 9, undefined],
  case3: [[1, 2, 3, 4], 5, [1, 2]],
  case3: [[1, 2, 3, 4], 5, [1, 2]]
}

test('[4, 5, 6, 2] for 5. [2, 3]', () => {
  expect(createMagicPotion(cases.case1[0], cases.case1[1])).toEqual(cases.case1[2])
})

test('[1, 2, 3, 4], for 9. Undefined', () => {
  expect(createMagicPotion(cases.case2[0], cases.case2[1])).toEqual(cases.case2[2])
})

test('[1, 2, 3, 4], for 5. [1, 2]', () => {
  expect(createMagicPotion(cases.case3[0], cases.case3[1])).toEqual(cases.case3[2])
})
