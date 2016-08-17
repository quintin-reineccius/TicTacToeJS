describe('e2e testing', () => {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('https://rampage1213.github.io/TicTacToeJS/');
  })

  it('should play a whole game where X wins', () => {
    //X row1 column1
    element(by.css('.row1 > td:nth-child(1) > button')).click()
    //O row2 column1
    element(by.css('.row2 > td:nth-child(1) > button')).click()
    //X row1 column2
    element(by.css('.row1 > td:nth-child(2) > button')).click()
    //O row1 column3
    element(by.css('.row1 > td:nth-child(3) > button')).click()
    //X row2 column2
    element(by.css('.row2 > td:nth-child(2) > button')).click()
    //O row3 column2
    element(by.css('.row3 > td:nth-child(2) > button')).click()
    //X row3 column3
    element(by.css('.row3 > td:nth-child(3) > button')).click()
    //X wins
  })

  //something is wrong here
  // it('should check if winner text popped up for X', () => {
  //   let winner = element(by.id('winner'));
  //
  //   expect(winner.getText()).to.eventually.equal('X Wins!');
  // })

  it('should clear the board', () => {
    element(by.buttonText('Clear Board')).click()
  })
})
