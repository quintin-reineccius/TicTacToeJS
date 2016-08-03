import { expect } from 'chai'
import addOnclicks from '../modules/add-onclicks'

describe('Add Onclicks', () => {
  it('should add onclicks', () => {
    let clearGameBoard = document.getElementById('clearBoard')
    let clearGameScores = document.getElementById('clearScores')
    let buttons = [
      [...document.querySelectorAll(".row1 > button")],
      [...document.querySelectorAll(".row2 > button")],
      [...document.querySelectorAll(".row3 > button")]
    ]

    addOnclicks()

    expect(typeof clearGameBoard.onclick).to.equal('function')
    expect(typeof clearGameScores.onclick).to.equal('function')

    expect(typeof buttons[0][0].onclick).to.equal('function')
    expect(typeof buttons[1][1].onclick).to.equal('function')
    expect(typeof buttons[2][2].onclick).to.equal('function')
  })
})
