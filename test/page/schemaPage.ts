import { element, by, browser , protractor} from "protractor";
import { BasePage } from "./basePage";

export class SchemaPage extends BasePage {
     
     createButton = element(by.xpath("//button[text()='Create New Schema']"));

     /**
      * Click create new Schema button
      */
    async clickCreateNewSchema() {
        browser.waitForAngularEnabled(false);
        this.waitForpageLoad(this.createButton);
        await this.createButton.click();
    }
    /**
     * Assert Schema is present
     * @param schemaName 
     */
    async assertSchemaIsPresent(schemaName : string) { 
        browser.waitForAngularEnabled(false);
        let viewSchema = element(by.xpath(`//td[@title='${schemaName}']`));
        expect(viewSchema.isPresent()).toBeTruthy();
        console.log(schemaName +" -- is present")

      }
      /**
     * Assert Schema is not present
     * @param schemaName 
     */
    async assertSchemaIsNotPresent(schemaName : string) { 
        browser.waitForAngularEnabled(false);
        let viewSchema = element(by.xpath(`//td[@title='${schemaName}']`));
        expect(viewSchema.isPresent()).toBeFalsy();
        console.log(schemaName +" -- is not present")

      }
}