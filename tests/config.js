exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['browser-tests/*.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true
    var width = 1600
    var height = 1200
    browser.driver.manage().window().setSize(width, height)

    require('babel-register')
    require('./setup')
  },
  mochaOpts: {
    enableTimeouts: false,
  },
}
