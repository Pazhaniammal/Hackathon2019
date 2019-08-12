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
        // await element.element(by.css('[value="' + dropDownvalue + '"]')).click();     
}
}