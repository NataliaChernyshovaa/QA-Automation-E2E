import { Page } from "@playwright/test"
import { contactUrl } from "../support/constants"
import { BasePage } from "./basePage"

export class ContactFormPage extends BasePage {
    constructor (page: Page) {
      super(page)
  
      this.url = contactUrl
    }

    public get frame () {
      return this.page.frameLocator('.hs-form-iframe')
    }

    public get emailField () {
      return this.frame.locator('#email-550b0952-ea48-4b4d-b0cc-89ce87f17153')
    }

    public get emailErrorLabel () {
      return this.frame.locator('label.hs-error-msg')
    }
}