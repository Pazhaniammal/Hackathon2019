import { element, by, browser, protractor } from "protractor";
import { BasePage } from "./basePage";

export class UserPage extends BasePage {
     createButton = element(by.xpath("//button[text()='Create New User']"));

     /**
      * Click create new user button
      */
    async clickCreateNewUser() {
        browser.waitForAngularEnabled(false);
        browser.sleep(4000);
        this.createButton.click();
    }
}