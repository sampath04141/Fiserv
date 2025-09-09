import { Page, Locator, expect } from '@playwright/test';

export class FiservDevelopersPage {
  readonly page: Page;
  readonly acceptButton: Locator;
  readonly mainBanner: Locator;
  readonly featuredProducts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptButton = page.getByRole('button', { name: 'Accept' });
    this.mainBanner = page.getByRole('heading', { name: /Build and test the future of financial services\./i });
    this.featuredProducts = page.getByRole('heading', { name: /Featured products/i });
  }

  async acceptCookies() {
    if (await this.acceptButton.isVisible()) {
      await this.acceptButton.click();
    }
  }

  async validateMainBanner() {
    await expect(this.mainBanner).toBeVisible();
  }

  async validateFeaturedProducts() {
    await expect(this.featuredProducts).toBeVisible();
    await expect(this.page.getByRole('heading', { name: /Banking Hub/i }).first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: /Commerce Hub/i }).first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: /Issuer Solutions/i }).first()).toBeVisible();
  }
}
