import {element, by, browser, protractor, ElementFinder} from "protractor";
import { BasePage } from "./basePage";

export class CreateOrganization extends BasePage{
    name = element(by.id('name'));
    email = element(by.id('email'));
    applicationName = element(by.id('application_name'));
    submitButton = element(by.id('submit'));

    async createNewOrganization(oraganizationName: string, oraganizationEmail: string, oraganizationApplicationName: string) {
       var until = protractor.ExpectedConditions;
       browser.wait(until.elementToBeClickable(this.name),3000);        
       await this.name.sendKeys(oraganizationName);
       this.email.sendKeys(oraganizationEmail);
       this.applicationName.sendKeys(oraganizationApplicationName);
       await this.submitButton.click();
       console.log(oraganizationName+" is created successfully")

    //    this.closeToastMessgae();
    }

}
