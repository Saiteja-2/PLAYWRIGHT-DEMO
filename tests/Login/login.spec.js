import {test, expect} from '@playwright/test';
test('demo login test 1', async ({page}) => {
   await page.goto('https://demo.applitools.com/')
   // await page.pause();
   await page.getByRole('textbox', { name: 'Enter your username' }).fill('Sai Teja');
   await page.getByRole('textbox', { name: 'Enter your password' }).fill('Sai@123');
   await page.waitForSelector('text= Sign in', {timeout:5000});
   await page.getByRole('link', { name: 'Sign in' }).click();

});

test('demo login test 2', async ({ browser }) => {

   const context = await browser.newContext({
      ignoreHTTPSErrors: true
   });

   const page = await context.newPage();

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   // await page.pause();
   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   await page.getByRole('button', { name: 'Login' }).click();  
});


test('Login demo test 3', async ({ page }) => {
   await page.goto('https://admin-demo.nopcommerce.com/login');
   await page.locator('input[name="Email"]').click();
   await page.locator('input[name="Email"]').press('Control+a');
   await page.locator('input[name="Email"]').fill('admin@yourstore.com');
   await page.locator('input[name="Password"]').click();
   await page.locator('input[name="Password"]').press('Control+a');
   await page.locator('input[name="Password"]').fill('admin');
   await page.locator('text=Log in').click();
   await page.locator('#nopSideBarPusher i').click();
   await page.locator('text=Logout').click();
   await page.waitForURL('https://admin-demo.nopcommerce.com/login');
   await page.close();
});
