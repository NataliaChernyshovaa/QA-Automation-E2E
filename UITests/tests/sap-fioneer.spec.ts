import test, { expect } from '@playwright/test'
import { HomePage } from "../src/pages/homePage";

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
  
      await expect(color).toBe('rgb(255, 212, 60)')
    });
 
  })