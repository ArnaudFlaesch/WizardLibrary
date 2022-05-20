// eslint-disable-next-line no-undef
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  collectCoverage: true,
  coverageDirectory: 'coverage-jest/'
};
