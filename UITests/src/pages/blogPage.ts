import { Page } from "@playwright/test";
import { blogUrl } from "../support/constants";
import { BasePage } from "./basePage";


export class BlogPage extends BasePage {
    constructor (page: Page) {
      super(page)
  
      this.url = blogUrl
    }

}