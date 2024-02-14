import { type Page } from '@playwright/test'


export class BasePage {
  protected url!: string;
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async visitPage () {
    await this.page.goto(this.url)
  }
}
