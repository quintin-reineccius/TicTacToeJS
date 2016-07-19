import { expect } from 'chai'
import currentRow from '../modules/check-move/current-row'

describe('Current Row', () => {
  it('should return false if theres no win', () => {
    let currentValue = 'X'
    let column = 1
    let row = 2
    let board = [
      ['X', 'O', 'O'],
      ['O', 'X', 'X'],
      ['X', 'O', 'O'],
    ]

    expect(currentRow({ column, row, currentValue, board })).to.equal(false)
  })

  it('should return true if there is a win on the first row', () => {
    let currentValue = 'O'
    let column = 1
    let row = 0
    let board = [
      ['O', 'O', 'O'],
      ['E', 'X', 'X'],
      ['E', 'E', 'E'],
    ]

    expect(currentRow({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the second row', () => {
    let currentValue = 'X'
    let column = 1
    let row = 1
    let board = [
      ['E', 'E', 'E'],
      ['X', 'X', 'X'],
      ['E', 'O', 'O'],
    ]

    expect(currentRow({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the third row', () => {
    let currentValue = 'O'
    let column = 1
    let row = 2
    let board = [
      ['E', 'E', 'E'],
      ['E', 'X', 'X'],
      ['O', 'O', 'O'],
    ]

    expect(currentRow({ column, row, currentValue, board })).to.equal(true)
  })
})
