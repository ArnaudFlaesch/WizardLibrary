require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup-jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov'],
  coverageDirectory: 'coverage/'
};
