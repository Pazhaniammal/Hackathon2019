import { element, by, browser } from "protractor";
import { BasePage } from "./basePage";
export class HomePage extends BasePage {
   

    async clickMenuLink(menuItemName :string) {
        browser.waitForAngularEnabled(false);
        let emailAddress = element(by.xpath(`//span[@title='${menuItemName}']`));
        emailAddress.click();
     }

}