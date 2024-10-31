import { test, expect } from 'vitest'
import { battleHorde } from './solution.js'

const cases = {
  case1: ['242', '334'], // Human wins
  case2: ['444', '282'], // Tie
  case3: ['123', '456'], // Human wins
  case4: ['987', '654'], // Zombie wins
  case5: ['555', '555'], // Tie
  case6: ['57685849323', '98765438965'] // Humnas wins
}

test('242 zombies VS 334 humans', () => {
  expect(battleHorde(cases.case1[0], cases.case1[1])).toEqual('2h')
})

test('444 zombies VS 282 humans', () => {
  expect(battleHorde(cases.case2[0], cases.case2[1])).toEqual('x')
})

test('123 zombies VS 456 humans', () => {
  expect(battleHorde(cases.case3[0], cases.case3[1])).toEqual('9h')
})

test('987 zombies VS 654 humans', () => {
  expect(battleHorde(cases.case4[0], cases.case4[1])).toEqual('9z')
})

test('555 zombies VS 555 humans', () => {
  expect(battleHorde(cases.case5[0], cases.case5[1])).toEqual('x')
})

test('57685849323 zombies VS 98765438965 humans', () => {
  expect(battleHorde(cases.case6[0], cases.case6[1])).toEqual('10h')
})
