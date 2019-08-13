import { browser, element, by, ElementFinder, protractor } from "protractor";

export class BasePage {
  
      clickDropdown = element(by.id('user-dropdown'));
      clickLogoutButton = element(by.xpath("//li[text()='Logout']"));

  /**
     * To select dropdown value 
     * @param idName 
     * @param dropDownvalue 
     */
    async selectDropDownOptionById(idName : string  , dropDownvalue: string) {

        let dropDownElement = element(by.id(idName));
        await dropDownElement.element(by.css('[value="' + dropDownvalue + '"]')).click();
        console.log(dropDownvalue+" is selected")
    }

    /**
     * Click Logout 
     */
     async clickLogout() {
        this.waitForpageLoad(this.clickDropdown);
        await this.clickDropdown.click();
        this.waitForpageLoad(this.clickLogoutButton);
        await this.clickLogoutButton.click();
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
        await this.waitForpageLoad(toast);
        await toast.click();
        browser.sleep(3000);
    }

    async waitForpageLoad(element : ElementFinder){
        var until = protractor.ExpectedConditions;
        await browser.wait(until.elementToBeClickable(element),5000);
    }
}