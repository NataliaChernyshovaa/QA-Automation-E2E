import { type Page } from '@playwright/test'
import { NavigationBar } from './sections/navigationBar';


export class BasePage {
  protected url!: string;
  public navigationBar: NavigationBar

  constructor (protected readonly page: Page) {
    this.navigationBar = new NavigationBar(page)
  }


  public async visitPage () {
    await this.page.goto(this.url)
  }
  public async getUrl () {
    return this.page.url()
  }
}
