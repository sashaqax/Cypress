const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'local',
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space',
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {},
    env: {
      email: 'alex_manson@gmail.com',
      password: 'Driftlife34',
    },
  },
})