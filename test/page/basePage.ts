import { browser, element, by, ElementFinder, protractor } from "protractor";

export class BasePage {
    /**
     * To select dropdown value 
     * @param idName 
     * @param dropDownvalue 
     */

      clickDropdown = element(by.id('user-dropdown'));
      clickLogoutButton = element(by.xpath("//li[text()='Logout']"));
        text =element(by.xpath("//li[text()='Logout']"));


    async selectDropDownOptionById(idName : string  , dropDownvalue: string) {

        let dropDownElement = element(by.id(idName));
        await dropDownElement.element(by.css('[value="' + dropDownvalue + '"]')).click();
        console.log(dropDownvalue+" is selected")

        // await element.element(by.css('[value="' + dropDownvalue + '"]')).click();     
    }

    /**
     * Click Logout 
     */
     async clickLogout() {
        var until = protractor.ExpectedConditions;
        await browser.wait(until.elementToBeClickable(this.clickDropdown),5000);   
        await this.clickDropdown.click();
        await browser.wait(until.elementToBeClickable(this.text),5000);  
       await this.text.click();
         console.log("Logout Clicked")


    }
    //   /**
    //  * Click Logout 
    //  */
    // async closeToastMessgae() {
    //     element(by.css('button[aria-label*="close"] ')).click();
    // }

    async closeToastMessgae() {
        let toast = element(by.css('.Toastify button'));
        var until = protractor.ExpectedConditions;
       await browser.wait(until.elementToBeClickable(toast),5000);   
        await toast.click();
}
}