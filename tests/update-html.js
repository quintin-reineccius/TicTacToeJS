import { expect } from 'chai'
import updateHTML from '../modules/update-html'
import { buttons, winner, wins } from '../modules/config'

describe('Update HTML', () => {
  it('Update game html that X won', () => {
    let currentValue = 'X'
    updateHTML(currentValue)

    expect(winner.innerHTML).to.equal('X Wins!')
    expect(wins[currentValue]).to.equal(1)
    expect(document.getElementById(`${currentValue}-holder`).innerHTML).to.equal('1')
  })

  it('Update game html that O won', () => {
    let currentValue = 'O'
    updateHTML(currentValue)

    expect(winner.innerHTML).to.equal('O Wins!')
    expect(wins[currentValue]).to.equal(1)
    expect(document.getElementById(`${currentValue}-holder`).innerHTML).to.equal('1')
  })

  it('Update game html that there was a tie', () => {
    let currentValue = 'ties'
    updateHTML(currentValue)

    expect(winner.innerHTML).to.equal('Tie!')
    expect(wins[currentValue]).to.equal(1)
    expect(document.getElementById(`${currentValue}-holder`).innerHTML).to.equal('1')
  })
})
