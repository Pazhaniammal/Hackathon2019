
import { BasePage } from "./basePage";
import { element, by, browser } from "protractor";
export class CreatSchemaPage extends BasePage{
    prefix = element(by.id('prefix'));
    formName = element(by.id('name'));
    dropdown = element(by.id('form_type'));

    
    /**
     * to fill the prefix value in in the create schema page
     * @param prefixValue 
     */
    async fillPrefix(prefixValue : string){
    browser.waitForAngularEnabled(false);
    this.prefix.sendKeys(prefixValue);
    }

    /**
     * to fill the formName value in the create schema page
     * @param formName 
     */
    async fillFormName(formName : string){
    browser.waitForAngularEnabled(false);
    this.formName.sendKeys(formName);
    }

    /**
     * to select the dropdown value in the create schema page
     * @param formType 
     */
    async fillDropdown(id : string , value : string){
        browser.waitForAngularEnabled(false);
        this.selectDropDownOptionById(id, value)
        
}

    async dragAndDrop(itemName : string){ 
    let source = element(by.xpath(`//span[contains(.,'${itemName}')]`));
    let target = element(by.id("submit"));
    browser.actions().dragAndDrop(source,target).mouseUp().perform();
    this.clickSaveButton();
    }
    
    async clickSaveButton(){
    let saveButton = element(by.className("btn btn-success"));
    saveButton.click();
    }

    async clickCreateForm() {
    let createButton = element(by.partialButtonText("Create Form"));
    createButton.click();
    }
    
}