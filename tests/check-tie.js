import { tiedButtons, wins } from './shared'
import checkTie from './modules/check-tie'

describe('Check Tie', () => {
  it('causes a tie when all buttons are enabled', () => {
    let buttons = tiedButtons
    checkTie(wins)
    expect(wins.ties).to.equal(1)
  })
})
