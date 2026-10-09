import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Books' }).nth(1).click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.getByRole('link', { name: 'Shopping cart (2)' }).click();
    await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();
    await page.getByRole('link', { name: 'Shopping cart (3)' }).click();
    await page.getByRole('row', { name: 'Picture of Computing and' }).getByRole('checkbox').check();
    await page.getByRole('row', { name: 'Picture of Health Book Health' }).getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByText('Update shopping cart Continue').click();
    await page.getByRole('cell', { name: 'Health Book', exact: true }).click();
    await page.getByRole('button', { name: 'close' }).click();
});