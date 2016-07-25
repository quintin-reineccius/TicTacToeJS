import { expect } from 'chai'
import clearScores from '../modules/clear-scores';
import { buttons, board, winner } from '../modules/config'

describe('Clear Scores', () => {
  it('should clear game scores', () => {
    let wins = {
      X: 130,
      O: 49,
      ties: 8
    }

    clearScores({ wins, buttons, board, winner })

    expect(wins['X'] && wins['O'] && wins['ties']).to.equal(0)
  })
})
