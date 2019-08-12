import { element, by } from "protractor";
import { BasePage } from "./basePage";
export class HomePage extends BasePage {
   

    async clickMenuLink(menuItemName :string){
        let emailAddress = element(by.xpath(`//span[@title='${menuItemName}']`));
        emailAddress.click();
     }

}