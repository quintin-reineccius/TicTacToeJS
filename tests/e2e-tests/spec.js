describe('e2e testing', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('https://rampage1213.github.io/TicTacToeJS/');
  });

  it('should play a whole game where X wins', function() {
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
  });

  it('should clear the board', function() {
    element(by.buttonText('Clear Board')).click()
  });
});
