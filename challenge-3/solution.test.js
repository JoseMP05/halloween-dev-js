import { test, expect } from 'vitest'
import { findSafestPath } from './solution.js'

const cases = {
  case1: [
    [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ],
    7
  ],
  case2: [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    21
  ],
  case3: [
    [
      [1, 2, 3],
      [1, 1, 1],
      [1, 1, 1]
    ],
    5
  ],
  case4: [
    [
      [5, 9, 2],
      [1, 4, 3],
      [6, 7, 8]
    ],
    21
  ]
}

test('safest path is 7', () => {
  expect(findSafestPath(cases.case1[0])).toEqual(cases.case1[1])
})

test('safest path is 21', () => {
  expect(findSafestPath(cases.case2[0])).toEqual(cases.case2[1])
})

test('safest path is 5', () => {
  expect(findSafestPath(cases.case3[0])).toEqual(cases.case3[1])
})

test('safest path is 21', () => {
  expect(findSafestPath(cases.case4[0])).toEqual(cases.case4[1])
})
