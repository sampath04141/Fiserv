import { Page, Locator, expect } from '@playwright/test'
import { promises } from 'dns';

export class HomePage {
    //Define page elements as locators
    readonly page: Page
    readonly title: Locator
    readonly manuItemList: Locator
    readonly menuItemDevelop: Locator

    menu: Array<string>;

    constructor(page: Page) {
        this.page = page;
        this.manuItemList = page.locator("//ul[@class='primary-nav']/li/label/span/span/a");
        this.menuItemDevelop= page.locator("//a[@data-analytics='Top Nav - Developers']");
    }

    async validateMenu(item: string): Promise<void> {
        const items: string[] = await this.manuItemList.allTextContents();

        const itemList = items.map(t => t.trim());
        const isFound = itemList.includes(item.trim());
        await expect(isFound).toBe(true);

    }

    async clickMenuItem(menuItem:string):Promise<void>{
        if(menuItem=='Developers')
            await this.menuItemDevelop.click();
    }

}