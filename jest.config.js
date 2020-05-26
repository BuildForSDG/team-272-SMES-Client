module.exports = {
  coverageReporters: ['html', 'text', 'text-summary'],
  projects: [
    {
      displayName: 'cypress',
      runner: 'cypress-jest',
      testMatch: ['<rootDir>/**/*-cy.js'],
    },
    {
      displayName: 'test' // Your other unit Tests with jest
    }
  ]
};
