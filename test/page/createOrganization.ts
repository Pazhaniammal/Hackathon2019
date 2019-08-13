import {element, by, browser, protractor, ElementFinder} from "protractor";
import { BasePage } from "./basePage";

export class CreateOrganization extends BasePage{
    name = element(by.id('name'));
    email = element(by.id('email'));
    applicationName = element(by.id('application_name'));
    submitButton = element(by.id('submit'));

    async createNewOrganization(oraganizationName: string, oraganizationEmail: string, oraganizationApplicationName: string) {
       this.waitForpageLoad(this.name);
       await this.name.sendKeys(oraganizationName);
       this.email.sendKeys(oraganizationEmail);
       this.applicationName.sendKeys(oraganizationApplicationName);
       await this.submitButton.click();
       await this.closeToastMessgae();
       console.log(oraganizationName+" is created successfully")
    }

}