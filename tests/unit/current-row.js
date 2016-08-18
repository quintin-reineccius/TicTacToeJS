import { expect } from 'chai'
import currentRow from '../../modules/check-move/current-row'

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
      [false, 'X', 'X'],
      [false, false, false],
    ]

    expect(currentRow({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the second row', () => {
    let currentValue = 'X'
    let column = 1
    let row = 1
    let board = [
      [false, false, false],
      ['X', 'X', 'X'],
      [false, 'O', 'O'],
    ]

    expect(currentRow({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true if there is a win on the third row', () => {
    let currentValue = 'O'
    let column = 1
    let row = 2
    let board = [
      [false, false, false],
      [false, 'X', 'X'],
      ['O', 'O', 'O'],
    ]

    expect(currentRow({ column, row, currentValue, board })).to.equal(true)
  })
})
