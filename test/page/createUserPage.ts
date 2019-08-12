import {element, by, browser, protractor, ElementFinder} from "protractor";
import { BasePage } from "./basePage";

export class CreateUserPage extends BasePage{
    firstName = element(by.id('first_name'));
    lastName = element(by.id('last_name'));
    userName = element(by.id('username'));
    email = element(by.id('email'));
    organizations = element(by.id('organizations'));
    roles = element(by.id('user_roles'));
    password = element(by.id('password'));
    clickSubmit = element(by.id('submit'));
    organizationElement = element(by.css('div[class*="organizations"]> div'));
    userRolesField = element(by.css('div[class*="user_roles"]> div'));

    async createNewUser(userFirstName: string, userLastName: string, userId: string, 
        userEmail: string, userOrganization: string, userRole: string, userPassword: string) {
         browser.sleep(3000);
         browser.waitForAngularEnabled(false);
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.firstName),3000); 
        this.firstName.sendKeys(userFirstName);
        this.lastName.sendKeys(userLastName);
        this.userName.sendKeys(userId);
        this.email.sendKeys(userEmail);
        this.selectFromDropDown(this.organizationElement, userOrganization);
        this.selectRoles(userRole);
        this.password.sendKeys(userPassword);
        this.clickSubmit.click();
        console.log(userFirstName+" is created successfully")


    }
     
    /**
     * to select the dropdown value
     * @param formType 
     */
    async selectFromDropDown (locator : ElementFinder, value: string ){
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(locator),3000); 
        browser.waitForAngularEnabled(false);
        locator.click();
        element(by.css('input[placeholder*="Type to search"]')).sendKeys(value);
        element(by.xpath(`//span[text()='${value}']`)).click();
    }
      
    /**
     * to select the dropdown value
     * @param formType 
     */
    async selectRoles (value: string ){
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(this.userRolesField),3000); 
        browser.sleep(3000);
        browser.waitForAngularEnabled(false);
        this.userRolesField.click();
        element(by.xpath(`//span[text()='${value}']`)).click();
        element(by.css('div[class*="user_roles"]> div')).click();
    }
   
}


