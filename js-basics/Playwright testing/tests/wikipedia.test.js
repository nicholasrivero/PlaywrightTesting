import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,847,000+ articles' }).click();
  await page.getByRole('link', { name: 'Village pump' }).click();
  await page.getByRole('link', { name: 'Department directory' }).click();
  await page.goto('https://en.wikipedia.org/wiki/Wikipedia:Discord');
  await page.goto('https://en.wikipedia.org/wiki/Wikipedia:Canvassing');
});
