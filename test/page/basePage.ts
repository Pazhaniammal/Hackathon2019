import { browser, element, by, ElementFinder } from "protractor";

export class BasePage {
    /**
     * To select dropdown value 
     * @param idName 
     * @param dropDownvalue 
     */
    async selectDropDownOptionById(idName : string  , dropDownvalue: string) {

        let dropDownElement = element(by.id(idName));
        await dropDownElement.element(by.css('[value="' + dropDownvalue + '"]')).click();
        console.log(dropDownvalue+" is selected")

        // await element.element(by.css('[value="' + dropDownvalue + '"]')).click();     
    }

    /**
     * Click Logout 
     */
     clickLogout() {
         browser.sleep(3000);
        element(by.id('user-dropdown')).click();
        element(by.xpath("//li[text()='Logout']")).click();
        console.log("Logout link is clicked")

    }
      /**
     * Click Logout 
     */
    async closeToastMessgae() {
        element(by.css('button[aria-label*="close"] ')).click();
    }
}