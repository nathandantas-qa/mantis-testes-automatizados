const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mantis-prova.base2.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
