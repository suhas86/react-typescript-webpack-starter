const resolve = require('resolve')

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/**/*',
    '!<rootDir>/src/test/**/*',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: resolve.sync('jest-environment-jsdom', {
    basedir: require.resolve('jest'),
  }),
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
}
