/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('visit page and take screenshot', async ({ page }) => {
    // Change checklyhq.com to your site's URL,
    // or, even better, define a ENVIRONMENT_URL environment variable
    // to reuse it across your browser checks
    const response = await page.goto(process.env.ENVIRONMENT_URL || 'https://rulz-ai.com')

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.jpg' })

    // Test that the response did not fail
    expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
})
