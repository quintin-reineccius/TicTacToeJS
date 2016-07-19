import { expect } from 'chai'
import currentColumn from '../modules/check-move/current-column'

describe('Current Column', () => {
  it('should return false if theres no win', () => {
    let currentValue = 'X'
    let column = 1
    let row = 2
    let board = [
      ['X', 'O', 'O'],
      ['O', 'X', 'X'],
      ['X', 'O', 'O'],
    ]

    expect(currentColumn({ column, row, currentValue, board })).to.equal(false)
  })

  it('should return true if there is a win on the first column', () => {
    let currentValue = 'O'
    let column = 0
    let row = 1
    let board = [
      ['O', 'E', 'E'],
      ['O', 'X', 'E'],
      ['O', 'X', 'E'],
    ]

    expect(currentColumn({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the secound column', () => {
    let currentValue = 'O'
    let column = 1
    let row = 1
    let board = [
      ['E', 'O', 'E'],
      ['X', 'O', 'E'],
      ['X', 'O', 'E'],
    ]

    expect(currentColumn({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the third column', () => {
    let currentValue = 'O'
    let column = 2
    let row = 1
    let board = [
      ['E', 'E', 'O'],
      ['E', 'X', 'O'],
      ['E', 'X', 'O'],
    ]

    expect(currentColumn({ column, row, currentValue, board })).to.equal(true)
  })
})
