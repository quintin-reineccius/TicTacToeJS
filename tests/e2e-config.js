exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e-tests/*.js'],

  onPrepare: () => {
    require('babel-register')
    require('./setup')
  },
}
