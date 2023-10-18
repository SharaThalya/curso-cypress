module.exports = {
  projectId: 'vy5h5b',
  e2e: {
    setupNodeEvents(on, config) {
      { "reporter"; "mochawesome",
      "reporterOptions";
          { "reportDir"; "cypress/report/mochawesome-report",
          "overwrite"; true,
          "html"; true,
          "json"; false,
          "timestamp"; "mmddyyyy_HHMMss" }}
    },
  },
};
