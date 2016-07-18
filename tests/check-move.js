import { expect } from 'chai'
import checkMove from '../modules/check-move'

describe('Check Move', () => {
  it('should return false if theres no win', () => {
    let currentValue = 'O'
    let column = 1
    let row = 0
    let board = [
      'X', 'O', 'O',
      'X', 'E', 'E',
      'E', 'O', 'O',
    ]

    expect(checkMove({ column, row, currentValue, board })).to.equal(false)
  })

  it('should return true if theres is win on top row', () => {
    let currentValue = 'O'
    let column = 1
    let row = 0
    let board = [
      'O', 'O', 'O',
      'X', 'E', 'X',
      'X', 'E', 'O',
    ]

    expect(checkMove({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true on middle row', () => {
    let currentValue = 'O'
    let column = 1
    let row = 0
    let board = [
      'X', 'E', 'O',
      'O', 'O', 'O',
      'X', 'E', 'O',
    ]

    expect(checkMove({ column, row, currentValue, board })).to.equal(true)
  })

  it('should return true on bottom row', () => {
    let currentValue = 'O'
    let column = 1
    let row = 0
    let board = [
      'X', 'E', 'O',
      'O', 'O', 'X',
      'X', 'X', 'X',
    ]

    expect(checkMove({ column, row, currentValue, board })).to.equal(true)
  })
})
