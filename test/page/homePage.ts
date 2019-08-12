import { element, by, browser } from "protractor";
import { BasePage } from "./basePage";
export class HomePage extends BasePage {
   

    async clickMenuLink(menuItemName :string){
        browser.waitForAngularEnabled(false);
        let menulink = element(by.xpath(`//span[@title='${menuItemName}']`));
        await menulink.click();
        console.log("Click menu link")
     }

}