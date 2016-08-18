describe('e2e testing', () => {
  let xHolder = element(by.id('X-holder'))
  let oHolder = element(by.id('O-holder'))
  let tiesHolder = element(by.id('ties-holder'))
  let winner = element(by.id('winner'))

  beforeEach(function() {
    browser.ignoreSynchronization = true
    browser.get('https://rampage1213.github.io/TicTacToeJS/')
  })

  it('should play a whole game where X wins', () => {
    element(by.css('.row1 > td:nth-child(1) > button')).click()
    element(by.css('.row2 > td:nth-child(1) > button')).click()
    element(by.css('.row1 > td:nth-child(2) > button')).click()
    element(by.css('.row1 > td:nth-child(3) > button')).click()
    element(by.css('.row2 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(3) > button')).click()
    browser.sleep(500)
  })

  // it('should check if winner text popped up for X', () => {
  //   expect(winner.getText()).to.eventually.equal('X Wins!')
  // })
  //
  // it('should check if X\'s score got updated', () => {
  //   expect(xHolder.getText()).to.eventually.equal('1')
  // })

  it('should clear the board', () => {
    element(by.buttonText('Clear Board')).click()
  })

  it('should play a whole game where O wins', () => {
    element(by.css('.row2 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(1) > button')).click()
    element(by.css('.row1 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(3) > button')).click()
    element(by.css('.row2 > td:nth-child(3) > button')).click()
    element(by.css('.row1 > td:nth-child(1) > button')).click()
    browser.sleep(500)
  })

  // it('should check if winner text popped up for O', () => {
  //   expect(winner.getText()).to.eventually.equal('O Wins!')
  // })

  // it('should check if O\'s score got updated', () => {
  //   expect(xHolder.getText()).to.eventually.equal('1')
  // })

  it('should clear the board', () => {
    element(by.buttonText('Clear Board')).click()
  })

  it('should play a game that ties', () => {
    element(by.css('.row1 > td:nth-child(1) > button')).click()
    element(by.css('.row2 > td:nth-child(1) > button')).click()
    element(by.css('.row3 > td:nth-child(1) > button')).click()
    element(by.css('.row1 > td:nth-child(3) > button')).click()
    element(by.css('.row2 > td:nth-child(3) > button')).click()
    element(by.css('.row3 > td:nth-child(3) > button')).click()
    element(by.css('.row1 > td:nth-child(2) > button')).click()
    element(by.css('.row2 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(2) > button')).click()
    browser.sleep(500)
  })

  // it('should check if winner text popped up is a tie', () => {
  //   expect(winner.getText()).to.eventually.equal('Tie!')
  // })

  // it('should check if Tie\'s score got updated', () => {
  //   expect(xHolder.getText()).to.eventually.equal('1')
  // })

  it('should clear game scores and board', () => {
    element(by.buttonText('Clear Scores')).click()
  })

  it('should check if game scores equal 0', () => {
    expect(xHolder.getText()).to.eventually.equal('0')
    expect(oHolder.getText()).to.eventually.equal('0')
    expect(tiesHolder.getText()).to.eventually.equal('0')
  })

})
