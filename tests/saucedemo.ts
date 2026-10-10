import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="password"]').press('Tab');
    await page.locator('[data-test="login-button"]').press('Enter');
    await page.locator('[data-test="item-4-title-link"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="dynamic-catalog-sidebar-link"]').click();
    await page.locator('[data-test="dynamic-catalog-slider-link"]').click();
    await page.locator('[data-test="dynamic-catalog-slider-item-name"]').click();
    await page.locator('[data-test="dynamic-catalog-slider-item-price"]').click();
    await page.locator('[data-test="dynamic-catalog-slider-item-name"]').click();
    await page.locator('div').filter({ hasText: 'Swag Labs' }).nth(4).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="inventory-sidebar-link"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('miiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="continue"]').click({
        clickCount: 3
    });
    await page.locator('[data-test="continue"]').dblclick();
});