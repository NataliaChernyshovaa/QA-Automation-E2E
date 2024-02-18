import  { test } from "../src/fixture/fixture"
import { expect } from '@playwright/test'
import { NAVIGATION_ITEMS } from '../src/support/types';
import { contactUrl, esgKpiEngineUrl } from '../src/support/constants';
import { unvalidEmail } from '../src/support/emailTestData';
import { errorValidatinEmailMessage } from '../src/support/errorMessages';


test.describe('Official Site Tests', () => {
  
    test.beforeEach(async ({ homePage }) => {
      await homePage.visitPage()
    })
  
    test('Should verify if Get in touch button has a yellow color', async ( {homePage} ) => {
        const color = await homePage.getInToutchButton.evaluate((item) => {
        return window.getComputedStyle(item).getPropertyValue("background-color")
      })
  
      expect(color).toBe('rgb(255, 212, 60)')

    });

    test (`Should verify if a user has been redirected to the ${esgKpiEngineUrl} page`, async ( {homePage, esgkpiEnginePage} ) => {
        await homePage.navigationBar.getNavigationItemByText(NAVIGATION_ITEMS.FINANCE_ESG).hover()
        await homePage.ESGKPIEngineLink.click()
      
        expect(await homePage.getUrl()).toBe(esgKpiEngineUrl);
        expect (esgkpiEnginePage.h1ElementESGKPIEngine).toBeVisible
      });

      test (`Should Verify if validation message will appear if email is unvalid`, async ( {homePage, contactFormPage} ) => {
        await homePage.getInToutchButton.click();
        expect(await contactFormPage.getUrl()).toBe(contactUrl);
        
        await contactFormPage.emailField.fill(unvalidEmail)
        await expect (contactFormPage.emailErrorLabel).toContainText(errorValidatinEmailMessage)
      }); 
 
  })