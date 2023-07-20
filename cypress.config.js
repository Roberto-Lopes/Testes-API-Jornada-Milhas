const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f1t22q',
  video: false,

  e2e: {
    baseUrl: 'https://localhost:7124',
    setupNodeEvents(on, config) {
      
    },
  },
});
