const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'svcx9i',
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: 'cypress/frontend-tests/*.spec.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
    }
  }
});