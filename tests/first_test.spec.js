import { test, expect } from '@playwright/test';

test('sample test', async ({ page }) => {
    await page.goto('https://www.google.com');

    await expect(page).toHaveURL('https://www.google.com/');
});
test('sample test 2', async ({ page }) => { 
    await page.goto('https://www.youtube.com');
    await expect(page).toHaveURL('https://www.youtube.com/')});