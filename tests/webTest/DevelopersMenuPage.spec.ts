import { test, expect, chromium, Page } from "@playwright/test"
import { HomePage } from "../../pages/HomePage";

test.describe('Merchants home page validation', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test('Accept pop up', async ({ page }) => {
        console.log('Accept popup');
    });

    test('Validate title', async ({ page, browser }) => {
        await page.locator("//button[@id='_evidon-banner-acceptbutton']").click();
        
        const homepage = new HomePage(page);
        const[newPage]=await Promise.all([
            page.waitForEvent('popup'),
            homepage.clickMenuItem('Developers')
        ]);
        await newPage.waitForLoadState("domcontentloaded")
        await expect(newPage).toHaveTitle('Home | Developer Studio');
    })
})