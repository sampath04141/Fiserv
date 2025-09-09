import { test, expect } from '@playwright/test';
import { FiservHomePage } from '../../pages/aiPages/FiservHomePage';
import { FiservDevelopersPage } from '../../pages/aiPages/FiservDevelopersPage';

test('Validate Fiserv Developers Page via', async ({ page, context }) => {
  // Go to Fiserv Home Page
  const home = new FiservHomePage(page);
  await home.goto();
  await home.acceptCookies();

  // Click Developers (top nav)
  const [devPage] = await Promise.all([
    context.waitForEvent('page'),
    home.clickDevelopers(),
  ]);

  // Validate new tab URL
  await devPage.waitForLoadState('domcontentloaded');
  expect(devPage.url()).toContain('https://developer.fiserv.com');

  // Interact with Developers Page
  const dev = new FiservDevelopersPage(devPage);
  await dev.acceptCookies();
  await dev.validateMainBanner();
  await dev.validateFeaturedProducts();

  await devPage.close();
});
