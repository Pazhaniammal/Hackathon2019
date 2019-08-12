import { element, by, browser } from "protractor";

export class ValidateForm {
  
    /**
     * click specific schema to view the form
     * @param schemaName 
     */
    async clickSchemaToCheckForm(schemaName : string) { 
      browser.waitForAngularEnabled(false);
      let viewSchema = element(by.xpath(`//td[@title='${schemaName}']/following-sibling::td[2]//span[@title='View']`));
      await viewSchema.click();
    }

    /**
     * To check field is present or not
     * @param fieldName 
     */
    async fieldIsPresent(fieldName: string) {
      browser.waitForAngularEnabled(false);
      let fieldElement = element(by.id(`${fieldName}`));
      return await fieldElement.isPresent();
    }

    /**
     * To verify label is present or not
     * @param labelName 
     */
    async verifyVisibilityOfLabelName(labelName: String) {
      browser.waitForAngularEnabled(false); 
      let labelElement = element(by.xpath(`//label[contains(.,'${labelName}')]`));
      return await labelElement.isPresent();

    }

}