import { element, by, browser } from "protractor";
import { BasePage } from "./basePage";
export class HomePage extends BasePage {
   
    async clickMenuLink(menuItemName :string) {
        browser.waitForAngularEnabled(false);
        browser.sleep(3000);
        let emailAddress = element(by.xpath(`//span[@title='${menuItemName}']`));
        emailAddress.click();
        console.log(menuItemName + "is clicked")
     }
    }
    