import {element, by, browser} from "protractor";

export class CreateOrganization{
    name = element(by.id('name'));
    email = element(by.id('email'));
    applicationName = element(by.id('application_name'));
    submitButton = element(by.id('submit'));

    async createNewOrganization(oraganizationName: string, oraganizationEmail: string, oraganizationApplicationName: string) {
       this.name.sendKeys(oraganizationName);
       this.email.sendKeys(oraganizationEmail);
       this.applicationName.sendKeys(oraganizationApplicationName);
       //submitButton.click();
    }
}