import { element, by, browser , protractor} from "protractor";
import { BasePage } from "./basePage";

export class SchemaPage extends BasePage {
     createButton = element(by.xpath("//button[text()='Create New Schema']"));

     /**
      * Click create new Schema button
      */
    async clickCreateNewSchema() {
        browser.waitForAngularEnabled(false);
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.createButton),5000); 
        await this.createButton.click();
    }
}