import { Page } from "@playwright/test"
import { baseUrl } from "../support/constants"
import { BasePage } from "./basePage"

export class HomePage extends BasePage {
    constructor (page: Page) {
      super(page)
  
      this.url = baseUrl
    }

    public get getInToutchButton () {
        return this.page.locator('#main-menu a:has-text("Get in touch")')
      }
}