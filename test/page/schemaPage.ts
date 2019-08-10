import { element, by, browser } from "protractor";

export class SchemaPage extends BasePage {
     createButton = element(by.linkText('Create New Schema'));

     /**
      * Click create new Schema button
      */
    clickCreateNewSchema() {
        browser.waitForAngularEnabled(false);
        this.createButton.click();
    }
}