const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,                // не записывать видео тестов
    screenshotOnRunFailure: true // делать скриншот при падении теста
  }
});