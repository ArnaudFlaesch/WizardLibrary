// eslint-disable-next-line no-undef
require('jest-preset-angular/ngcc-jest-processor');

// eslint-disable-next-line no-undef
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov'],
  coverageDirectory: 'coverage-jest/'
};
