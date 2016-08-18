import { expect } from 'chai'
import clearScores from '../../modules/clear-scores'
import { buttons, board, winner, table, tbody } from '../../modules/config'

describe('Clear Scores', () => {
  it('should clear game scores', () => {
    let wins = {
      X: 130,
      O: 49,
      ties: 8
    }

    clearScores({ buttons, board, winner, wins, table, tbody })

    expect(wins['X'] && wins['O'] && wins['ties']).to.equal(0)
  })
})
