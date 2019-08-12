import { element, by, browser } from "protractor";
import { BasePage } from "./basePage";

export class UserPage extends BasePage {
     createButton = element(by.xpath("//button[text()='Create Organization']"));

     /**
      * Click create new user button
      */
    async clickCreateNewUser() {
    
        browser.waitForAngularEnabled(false);
        this.createButton.click();
    }
}