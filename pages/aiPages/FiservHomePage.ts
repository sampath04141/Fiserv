import { Page, Locator } from '@playwright/test';

export class FiservHomePage {
  readonly page: Page;
  readonly acceptAllButton: Locator;
  readonly developersNav: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptAllButton = page.getByRole('button', { name: 'Accept All' });
    this.developersNav = page.getByRole('link', { name: 'Developers' }).first();
  }

  async goto() {
    await this.page.goto('https://www.fiserv.com/en.html');
  }

  async acceptCookies() {
    if (await this.acceptAllButton.isVisible()) {
      await this.acceptAllButton.click();
    }
  }

  async clickDevelopers() {
    await this.developersNav.click();
  }
}
