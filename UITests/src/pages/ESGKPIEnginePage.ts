import { Page } from "@playwright/test"
import { esgKpiEngineUrl } from "../support/constants"
import { BasePage } from "./basePage"

export class ESGKPIEnginePage extends BasePage {
    constructor (page: Page) {
      super(page)
  
      this.url = esgKpiEngineUrl
    }

    public get h1ElementESGKPIEngine () {
      return this.page.locator('#text-3859516516 h1')
    }   
}