const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {},
  },
  env: {
    email: 'joe_brown@gmail.com',
    password: 'Driftlife45',
    guestUsername: 'guest',
    guestPassword: 'welcome2qauto',
  },
})