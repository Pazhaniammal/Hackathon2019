import { element, by, browser } from "protractor";
import { BasePage } from "./basePage";

export class OrganizationPage extends BasePage {
    createButton = element(by.xpath("//button[text()='Create Organization']"));

    /**
     * Click create new Organization button
     */
   async clickCreateNewOrganization() {
    browser.waitForAngularEnabled(false);
    await this.createButton.click();
   }
}