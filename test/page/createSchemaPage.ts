
import { BasePage } from "./basePage";
import { element, by, browser, protractor } from "protractor";
export class CreatSchemaPage extends BasePage{
    prefix = element(by.id('prefix'));
    formName = element(by.id('name'));
    dropdown = element(by.id('form_type'));
    labelName = element(by.name('data[label]'));
    labelPosition = element(by.css('div[class*="labelPosition"]> div'));
    submitButton = element(by.id("submit"))
    createButton = element(by.partialButtonText("Create Form"))
    /**
     * to fill the prefix value in in the create schema page
     * @param prefixValue 
     */
    async fillPrefix(prefixValue : string){
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.prefix),3000); 
    browser.waitForAngularEnabled(false);
    this.prefix.sendKeys(prefixValue);
    console.log(prefixValue+" is filled")

    }

    /**
     * to fill the formName value in the create schema page
     * @param formName 
     */
    async fillFormName(formName : string){
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.formName),3000); 
    browser.waitForAngularEnabled(false);
    this.formName.sendKeys(formName);
    console.log(formName+" is filled")

    }

    /**
     * to select the dropdown value in the create schema page
     * @param formType 
     */
    async fillDropdown(id : string , value : string){
        browser.waitForAngularEnabled(false);
        this.selectDropDownOptionById(id, value)
        console.log(value+" is selected")

    }

    /**
     * 
     * @param itemName 
     */
    async dragAndDrop(itemName : string){ 
      let source = element(by.xpath(`//span[contains(.,'${itemName}')]`));
       let target = element(by.id("submit"));
      browser.actions().dragAndDrop(source,target).mouseUp().perform();
    }
    
   /**
     * to fill the LabelName value in the create schema page
     * @param LabelName 
     */
    async fillLabelName(labelText : string){
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.labelName),3000); 
        browser.waitForAngularEnabled(false);
        await this.labelName.click();
        await this.labelName.clear();
        await this.labelName.sendKeys(labelText);
    }
    
    
    /**
     * to select the dropdown value in the create schema page
     * @param formType 
     */
    async fillLabelPosition (value : string){
        browser.waitForAngularEnabled(false);
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.labelPosition),3000); 
        this.labelPosition.click();
        await element(by.xpath(`//span[text()='${value}']`)).click();
    }

    /**
     * Add radio button values
     * @param radiobuttonName 
     * @param rowValue 
     */
    async addRadioButtonName(radiobuttonName : string, rowValue: string) {
        let radioButtonName = element(by.css(`input[name*="[${rowValue}][label]"]`));
        await radioButtonName.sendKeys(radiobuttonName);

    }

    /**
     * Click  Add another row button
     */
    async clickAddAnotherRow() {
        let saveButton = element(by.css('button[class*="add-row"]'));
       await  saveButton.click();
    }

    /**
     * Click Form field save button
     */
    async clickSaveButton(){
    let saveButton = element(by.className("btn btn-success"));
    await saveButton.click();
    }

    /**
     * Click Create Form button
     */
    async clickCreateForm() {
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.submitButton),5000); 
        await this.submitButton.click();
        await this.createButton.click();
    }
    
}