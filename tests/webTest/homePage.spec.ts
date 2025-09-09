import { test, expect } from "@playwright/test"
import { Console } from "console"
import { beforeEach } from "node:test"
import { HomePage } from "../../pages/HomePage";

test.describe('Home Page validations', async () => {


    test.beforeEach(async ({ page }) => {
        console.log('--Before Each--');
        await page.goto('/')
        await page.locator("//button[@id='_evidon-banner-acceptbutton']").click();

    });

    const menuItems: Array<string> = ['Who We Serve', 'Insights', 'About', 'Careers'];


//     test('Validate title', async ({ page }) => {
//         await expect(page).toHaveTitle("Financial Services Technology, Mobile Banking, Payments | Fiserv");
//         await expect(page).toHaveURL("https://www.fiserv.com/");
//     });

//     test('Validate main menu Items', async ({ page }) => {
//         const homePage = new HomePage(page);
//         for (let i = 0; i < menuItems.length; i++) {
//             await homePage.validateMenu(menuItems[i]);
//         }

//     });
 })