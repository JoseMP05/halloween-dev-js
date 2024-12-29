import { test, expect } from 'vitest'
import { findTheKiller } from './solution.js'

const cases = {
  case1: {
    whisper: 'd~~~~~a',
    suspects: ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'],
    guilty: 'Dracula'
  },
  case2: {
    whisper: '~r~dd~',
    suspects: ['Freddy', 'Freddier', 'Fredderic'],
    guilty: 'Freddy,Freddier,Fredderic'
  },
  case3: {
    whisper: '~r~dd$',
    suspects: ['Freddy', 'Freddier', 'Fredderic'],
    guilty: ''
  },
  case4: {
    whisper: 'mi~~def',
    suspects: ['Midudev', 'Midu', 'Madeval'],
    guilty: ''
  },
  case5: {
    whisper: '~~~~~~$',
    suspects: ['Pennywise', 'Leatherface', 'Agatha'],
    guilty: 'Agatha'
  },
}

test('Only one name matches the pattern', () => {
  expect(findTheKiller(cases.case1.whisper, cases.case1.suspects)).toEqual(cases.case1.guilty)
})

test('Several names matching', () => {
  expect((findTheKiller(cases.case2.whisper, cases.case2.suspects))).toEqual(cases.case2.guilty)
})

test('No name matching', () => {
  expect((findTheKiller(cases.case3.whisper, cases.case3.suspects))).toEqual(cases.case3.guilty)
})

test('Names shortest than whisper', () => {
  expect((findTheKiller(cases.case4.whisper, cases.case4.suspects))).toEqual(cases.case4.guilty)
})

test('Suspected by length', () => {
  expect((findTheKiller(cases.case5.whisper, cases.case5.suspects))).toEqual(cases.case5.guilty)
})