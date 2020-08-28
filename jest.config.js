module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testMatch: ['<rootDir>/__tests__/*.spec.js']
}
