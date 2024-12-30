const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 15 * 1000,
  retries: 1,
  expect: {
    timeout: 5000
  },
  reporter: [
    ['html'],
    ['line'],
    ['allure-playwright']
  ],
  projects: [
    {
      name : 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure',
        args: ['--start-maximized']
      }
    },
    {
      name : 'firefox',
      use: {

        browserName: 'firefox',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure',
        viewport: null,
        args: ['--start-maximized']
      }
    },
    {
      name : 'safari',
      use: {

        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure',
        viewport: null,
        args: ['--start-maximized']
      }
    }
  ]

});

