import { type Page } from '@playwright/test';
import { type NAVIGATION_ITEMS } from '../../support/types';

export class NavigationBar {
  constructor (protected readonly page: Page) {}
  public getNavigationItemByText (item: NAVIGATION_ITEMS) {
    return this.page.locator(`li.menu-item:has-text("${item}") a.nav-top-link`)
  }
}