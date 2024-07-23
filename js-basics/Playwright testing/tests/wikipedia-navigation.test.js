// tests/wikipedia/wikipedia-navigation.test.js
import { test, expect } from '@playwright/test';

test('Wikipedia Navigation and Interaction Test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  console.log('Navigated to Wikipedia homepage');

  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('Donald Tr');
  console.log('Filled search input with "Donald Tr"');

  await page.getByRole('link', { name: /Donald Trump President of the/i }).click();
  console.log('Clicked on Donald Trump link');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot-after-click.png' });

  await expect(page).toHaveTitle(/Donald Trump/i);
  console.log('Verified title contains "Donald Trump"');

  await page.getByPlaceholder('Search Wikipedia').click();
  await page.getByPlaceholder('Search Wikipedia').fill('2020 Elec');
  console.log('Filled search input with "2020 Elec"');

  await page.getByRole('link', { name: /United States presidential election 59th quadrennial U.S. presidential election/i }).click();
  console.log('Clicked on 2020 Election link');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot-after-election-click.png' });

  await expect(page).toHaveTitle(/United States presidential election/i);
  console.log('Verified title contains "United States presidential election"');

  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByPlaceholder('Enter your username').fill('exampleUsername');
  console.log('Filled in username with "exampleUsername"');
}, { timeout: 60000 }); // Increase timeout to 60 seconds
