import { expect } from 'chai'

describe('Setup Test', () => {
  it('should have a title', () => {
    browser.get('https://rampage1213.github.io/TicTacToeJS/');

    expect(browser.getTitle()).to.eventually.equal('Tic Tac Toe');
  })
})
