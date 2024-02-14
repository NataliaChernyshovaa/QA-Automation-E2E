import test, { expect } from '@playwright/test'
import { HomePage } from "../src/pages/homePage";
import { NAVIGATION_ITEMS } from '../src/support/types';
import { esgKpiEngineUrl } from '../src/support/constants';

test.describe('Official Site Tests', () => {
    let homePage: HomePage;
  
    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page)
  
      await homePage.visitPage()
    })
  
    test.afterEach(async ({ page }) => {
      await page.close()
    })
  
    test('Should verify if Get in touch button has a yellow color', async () => {
        const color = await homePage.getInToutchButton.evaluate((item) => {
        return window.getComputedStyle(item).getPropertyValue("background-color")
      })
  
      expect(color).toBe('rgb(255, 212, 60)')

    });

    test (`Should verify if a user has been redirected to the ${esgKpiEngineUrl} page`, async () => {
        await homePage.navigationBar.getNavigationItemByText(NAVIGATION_ITEMS.FINANCE_ESG).hover()
        await homePage.ESGKPIEngineLink.click()
      
        expect(await homePage.getUrl()).toBe(esgKpiEngineUrl);
      });
 
  })