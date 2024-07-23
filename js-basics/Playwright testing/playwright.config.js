// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  timeout: 60000, // Increase global timeout to 60 seconds
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  testDir: './tests',
};
