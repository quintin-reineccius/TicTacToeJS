import { expect } from 'chai'
import currentColumn from '../../modules/check-move/current-column'

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
      ['O', false, false],
      ['O', 'X', false],
      ['O', 'X', false],
    ]

    expect(currentColumn({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the secound column', () => {
    let currentValue = 'O'
    let column = 1
    let row = 1
    let board = [
      [false, 'O', false],
      ['X', 'O', false],
      ['X', 'O', false],
    ]

    expect(currentColumn({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the third column', () => {
    let currentValue = 'O'
    let column = 2
    let row = 1
    let board = [
      [false, false, 'O'],
      [false, 'X', 'O'],
      [false, 'X', 'O'],
    ]

    expect(currentColumn({ column, row, currentValue, board })).to.equal(true)
  })
})
