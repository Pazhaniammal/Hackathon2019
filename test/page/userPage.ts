import { element, by, browser, protractor } from "protractor";
import { BasePage } from "./basePage";

export class UserPage extends BasePage {
     createButton = element(by.xpath("//button[text()='Create New User']"));

     /**
      * Click create new user button
      */
    async clickCreateNewUser() {
        browser.waitForAngularEnabled(false);
       this.waitForpageLoad(this.createButton);
        this.createButton.click();
    }
}