import { element, by, browser } from "protractor";
import { BasePage } from "./basePage";

export class SchemaPage extends BasePage {
     createButton = element(by.xpath("//button[text()='Create New Schema']"));

     /**
      * Click create new Schema button
      */
    async clickCreateNewSchema() {
        
        // browser.waitForAngularEnabled(false);
        this.createButton.click();
    }
}