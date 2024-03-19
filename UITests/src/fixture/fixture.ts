import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ESGKPIEnginePage } from '../pages/ESGKPIEnginePage';
import { ContactFormPage } from '../pages/contactFormPage';
import { BlogPage } from '../pages/blogPage';

export const test = base.extend<{ homePage: HomePage, contactFormPage: ContactFormPage, esgkpiEnginePage: ESGKPIEnginePage, blogPage: BlogPage }>({
    homePage: async ({ page }, use) => {
      const homePage = new HomePage(page)
      await use(homePage)
      await homePage.close()
    },
     contactFormPage: async ({ page }, use) => {
      const contactFormPage = new ContactFormPage(page)
      await use(contactFormPage)
    },
      esgkpiEnginePage: async ({ page }, use) => {
      const esgkpiEnginePage = new ESGKPIEnginePage(page)
      await use(esgkpiEnginePage)
    },
      blogPage: async ({ page }, use) => {
      const blogPage = new BlogPage(page)
      await use(blogPage)
      } 
  });